/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date and time */
  DateTimeType: string;
  /** Metric column */
  MetricColumnType: any;
  /** Identificator */
  UuidType: any;
};

export type AddWalletInputType = {
  /** Blockchain */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  /** Wallet address */
  address: Scalars['String'];
};

export type AuthEthereumInputType = {
  /** Blockchain network id */
  network: Scalars['String'];
  /** Wallet address */
  address: Scalars['String'];
  /** Message */
  message: Scalars['String'];
  /** Signed message */
  signature: Scalars['String'];
};

export type AuthType = {
  __typename?: 'AuthType';
  /** Authenticated user account */
  user: UserType;
  /** Session ID */
  sid: Scalars['String'];
};

export type AuthWavesInputType = {
  /** Blockchain network id */
  network: Scalars['String'];
  /** Wallet public key */
  publicKey: Scalars['String'];
  /** Wallet address */
  address: Scalars['String'];
  /** Message */
  message: Scalars['String'];
  /** Signed message */
  signature: Scalars['String'];
};

export type AutomateActionCreateInputType = {
  /** Trigger */
  trigger: Scalars['UuidType'];
  /** Type */
  type: AutomateActionTypeEnum;
  /** Parameters */
  params: Scalars['String'];
  /** Execution priority (ascending) */
  priority?: Maybe<Scalars['Int']>;
};

export type AutomateActionListFilterInputType = {
  id?: Maybe<Scalars['UuidType']>;
  type?: Maybe<AutomateConditionTypeEnum>;
};

export type AutomateActionListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type AutomateActionListSortInputType = {
  column: AutomateActionListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum AutomateActionListSortInputTypeColumnEnum {
  Priority = 'priority'
}

export type AutomateActionListType = {
  __typename?: 'AutomateActionListType';
  /** Elements */
  list?: Maybe<Array<AutomateActionType>>;
  pagination: Pagination;
};

export type AutomateActionType = {
  __typename?: 'AutomateActionType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Type */
  type: AutomateActionTypeEnum;
  /** Condition parameters */
  params: Scalars['String'];
  /** Execution priority (ascending) */
  priority: Scalars['Int'];
  /** Created at date */
  createdAt: Scalars['DateTimeType'];
};

export enum AutomateActionTypeEnum {
  Notification = 'notification',
  EthereumAutomateRun = 'ethereumAutomateRun'
}

export type AutomateActionUpdateInputType = {
  /** Action identifier */
  id: Scalars['UuidType'];
  /** Parameters */
  params?: Maybe<Scalars['String']>;
  /** Execution priority (ascending) */
  priority?: Maybe<Scalars['Int']>;
};

export type AutomateConditionCreateInputType = {
  /** Trigger */
  trigger: Scalars['UuidType'];
  /** Type */
  type: AutomateConditionTypeEnum;
  /** Parameters */
  params: Scalars['String'];
  /** Execution priority (ascending) */
  priority?: Maybe<Scalars['Int']>;
};

export type AutomateConditionListFilterInputType = {
  id?: Maybe<Scalars['UuidType']>;
  type?: Maybe<AutomateConditionTypeEnum>;
};

export type AutomateConditionListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type AutomateConditionListSortInputType = {
  column: AutomateConditionListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum AutomateConditionListSortInputTypeColumnEnum {
  Priority = 'priority'
}

export type AutomateConditionListType = {
  __typename?: 'AutomateConditionListType';
  /** Elements */
  list?: Maybe<Array<AutomateConditionType>>;
  pagination: Pagination;
};

export type AutomateConditionType = {
  __typename?: 'AutomateConditionType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Type */
  type: AutomateConditionTypeEnum;
  /** Condition parameters */
  params: Scalars['String'];
  /** Execution priority (ascending) */
  priority: Scalars['Int'];
  /** Created at date */
  createdAt: Scalars['DateTimeType'];
};

export enum AutomateConditionTypeEnum {
  Schedule = 'schedule',
  EthereumAvgGasPrice = 'ethereumAvgGasPrice',
  EthereumBalance = 'ethereumBalance',
  EthereumOptimalAutomateRun = 'ethereumOptimalAutomateRun'
}

export type AutomateConditionUpdateInputType = {
  /** Condition identifier */
  id: Scalars['UuidType'];
  /** Parameters */
  params?: Maybe<Scalars['String']>;
  /** Execution priority (ascending) */
  priority?: Maybe<Scalars['Int']>;
};

export type AutomateContractCreateInputType = {
  /** Wallet owner */
  wallet: Scalars['UuidType'];
  /** Protocol */
  protocol: Scalars['UuidType'];
  /** Address */
  address: Scalars['String'];
  /** Adapter name */
  adapter: Scalars['String'];
  /** Init method parameters */
  initParams: Scalars['String'];
};

export type AutomateContractListFilterInputType = {
  user?: Maybe<Scalars['UuidType']>;
  wallet?: Maybe<Scalars['UuidType']>;
  protocol?: Maybe<Scalars['UuidType']>;
  address?: Maybe<Array<Scalars['String']>>;
};

export type AutomateContractListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type AutomateContractListQuery = {
  __typename?: 'AutomateContractListQuery';
  /** Elements */
  list?: Maybe<Array<AutomateContractType>>;
  pagination: Pagination;
};

export type AutomateContractListSortInputType = {
  column: AutomateContractListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum AutomateContractListSortInputTypeColumnEnum {
  CreatedAt = 'createdAt'
}

export type AutomateContractType = {
  __typename?: 'AutomateContractType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Owner wallet */
  wallet: WalletType;
  /** Protocol */
  protocol: ProtocolType;
  /** Address in blockchain */
  address: Scalars['String'];
  /** Adapter name */
  adapter: Scalars['String'];
  /** Init method parameters */
  initParams: Scalars['String'];
  /** Verification status */
  verification: AutomateContractVerificationStatusEnum;
  rejectReason: Scalars['String'];
};

export type AutomateContractUpdateInputType = {
  /** Contract identifier */
  id: Scalars['UuidType'];
  /** Init method parameters */
  initParams?: Maybe<Scalars['String']>;
};

export enum AutomateContractVerificationStatusEnum {
  Pending = 'pending',
  Confirmed = 'confirmed',
  Rejected = 'rejected'
}

export type AutomateTriggerCallHistoryListFilterInputType = {
  hasError?: Maybe<Scalars['Boolean']>;
};

export type AutomateTriggerCallHistoryListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type AutomateTriggerCallHistoryListQuery = {
  __typename?: 'AutomateTriggerCallHistoryListQuery';
  /** Elements */
  list?: Maybe<Array<AutomateTriggerCallHistoryType>>;
  pagination: Pagination;
};

export type AutomateTriggerCallHistoryListSortInputType = {
  column: AutomateTriggerCallHistoryListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum AutomateTriggerCallHistoryListSortInputTypeColumnEnum {
  CreatedAt = 'createdAt'
}

export type AutomateTriggerCallHistoryType = {
  __typename?: 'AutomateTriggerCallHistoryType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Call error */
  error?: Maybe<Scalars['String']>;
  /** Created at date */
  createdAt: Scalars['DateTimeType'];
};

export type AutomateTriggerCreateInputType = {
  /** Wallet owner */
  wallet: Scalars['UuidType'];
  /** Type */
  type: AutomateTriggerTypeEnum;
  /** Parameters */
  params: Scalars['String'];
  /** Name */
  name: Scalars['String'];
  /** Is active */
  active?: Maybe<Scalars['Boolean']>;
};

export type AutomateTriggerFilterInputType = {
  id: Scalars['UuidType'];
};

export type AutomateTriggerListFilterInputType = {
  user?: Maybe<Scalars['UuidType']>;
  wallet?: Maybe<Scalars['UuidType']>;
  active?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
};

export type AutomateTriggerListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type AutomateTriggerListQuery = {
  __typename?: 'AutomateTriggerListQuery';
  /** Elements */
  list?: Maybe<Array<AutomateTriggerType>>;
  pagination: Pagination;
};

export type AutomateTriggerListSortInputType = {
  column: AutomateTriggerListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum AutomateTriggerListSortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  CreatedAt = 'createdAt'
}

export type AutomateTriggerType = {
  __typename?: 'AutomateTriggerType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Type */
  type: AutomateTriggerTypeEnum;
  /** Trigger parameters */
  params: Scalars['String'];
  /** Wallet of owner */
  wallet: WalletType;
  /** Name */
  name: Scalars['String'];
  /** Is trigger active */
  active: Scalars['Boolean'];
  /** Date of last call */
  lastCallAt?: Maybe<Scalars['DateTimeType']>;
  /** Created at date */
  createdAt: Scalars['DateTimeType'];
  conditions: AutomateConditionListType;
  actions: AutomateActionListType;
  callHistory: AutomateTriggerCallHistoryListQuery;
};

export type AutomateTriggerTypeConditionsArgs = {
  filter?: Maybe<AutomateConditionListFilterInputType>;
  sort?: Maybe<Array<AutomateConditionListSortInputType>>;
  pagination?: Maybe<AutomateConditionListPaginationInputType>;
};

export type AutomateTriggerTypeActionsArgs = {
  filter?: Maybe<AutomateActionListFilterInputType>;
  sort?: Maybe<Array<AutomateActionListSortInputType>>;
  pagination?: Maybe<AutomateActionListPaginationInputType>;
};

export type AutomateTriggerTypeCallHistoryArgs = {
  filter?: Maybe<AutomateTriggerCallHistoryListFilterInputType>;
  sort?: Maybe<Array<AutomateTriggerCallHistoryListSortInputType>>;
  pagination?: Maybe<AutomateTriggerCallHistoryListPaginationInputType>;
};

export enum AutomateTriggerTypeEnum {
  EveryMonth = 'everyMonth',
  EveryWeek = 'everyWeek',
  EveryDay = 'everyDay',
  EveryHour = 'everyHour',
  ContractEvent = 'contractEvent'
}

export type AutomateTriggerUpdateInputType = {
  /** Trigger identifier */
  id: Scalars['UuidType'];
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Is active */
  active?: Maybe<Scalars['Boolean']>;
};

export type BillingBalanceType = {
  __typename?: 'BillingBalanceType';
  balance: Scalars['Float'];
  claim: Scalars['Float'];
  netBalance: Scalars['Float'];
};

export enum BillingBillStatusEnum {
  /** Bill awaiting confirmation */
  Pending = 'pending',
  /** Bill accepted */
  Accepted = 'accepted',
  /** Bill rejected */
  Rejected = 'rejected'
}

export type BillingBillType = {
  __typename?: 'BillingBillType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Blockchain type */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  /** Account */
  account: Scalars['String'];
  /** Claimant */
  claimant: Scalars['String'];
  /** Declarate gas fee */
  claimGasFee: Scalars['Float'];
  /** Declarate protocol fee */
  claimProtocolFee: Scalars['Float'];
  /** Confirmed gas fee */
  gasFee?: Maybe<Scalars['Float']>;
  /** Confirmed protocol fee */
  protocolFee?: Maybe<Scalars['Float']>;
  /** Balance of claim after make the bill */
  claim: Scalars['Float'];
  /** Current status */
  status: BillingBillStatusEnum;
  /** Transaction id */
  tx: Scalars['String'];
  /** Date of created */
  createdAt: Scalars['DateTimeType'];
  /** Date of last updated */
  updatedAt: Scalars['DateTimeType'];
};

export type BillingTransferType = {
  __typename?: 'BillingTransferType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Blockchain type */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  /** Account */
  account: Scalars['String'];
  /** Transfer amount (must be negative) */
  amount: Scalars['Float'];
  /** Transaction id */
  tx: Scalars['String'];
  /** Bill */
  bill?: Maybe<BillingBillType>;
  /** Date of created */
  createdAt: Scalars['DateTimeType'];
};

export enum BlockchainEnum {
  Ethereum = 'ethereum',
  Waves = 'waves'
}

export type BlockchainFilterInputType = {
  protocol: BlockchainEnum;
  network?: Maybe<Scalars['String']>;
};

export type ContractCreateInputType = {
  /** Blockchain protocol */
  blockchain: BlockchainEnum;
  /** Blockchain network */
  network: Scalars['String'];
  /** Address */
  address: Scalars['String'];
  /** Adapter name */
  adapter: Scalars['String'];
  /** Contract deployment block number */
  deployBlockNumber?: Maybe<Scalars['String']>;
  /** Layout name */
  layout: Scalars['String'];
  /** Name */
  name: Scalars['String'];
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Website URL */
  link?: Maybe<Scalars['String']>;
  /** Is hidden */
  hidden?: Maybe<Scalars['Boolean']>;
  /** Events to subscribe in scanner */
  eventsToSubscribe?: Maybe<Array<Scalars['String']>>;
};

export type ContractListFilterInputType = {
  id?: Maybe<Scalars['UuidType']>;
  blockchain?: Maybe<BlockchainFilterInputType>;
  hidden?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
};

export type ContractListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ContractListSortInputType = {
  column: ContractListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ContractListSortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  Address = 'address',
  CreatedAt = 'createdAt'
}

export type ContractListType = {
  __typename?: 'ContractListType';
  /** Elements */
  list?: Maybe<Array<ContractType>>;
  pagination: Pagination;
};

export type ContractMetricChartFilterInputType = {
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type ContractMetricChartPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ContractMetricChartSortInputType = {
  column: ContractMetricChartSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ContractMetricChartSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type ContractType = {
  __typename?: 'ContractType';
  /** Identificator */
  id: Scalars['UuidType'];
  protocolId: Scalars['UuidType'];
  /** Adapter name */
  adapter: Scalars['String'];
  /** Layout name */
  layout: Scalars['String'];
  /** Blockchain type */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  /** Address */
  address: Scalars['String'];
  /** Contract deployment block number */
  deployBlockNumber?: Maybe<Scalars['String']>;
  /** Name */
  name: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  /** View URL */
  link?: Maybe<Scalars['String']>;
  /** Is hidden */
  hidden: Scalars['Boolean'];
  metricChart: Array<MetricChartType>;
  events: Array<Scalars['String']>;
  /** Date of created account */
  createdAt: Scalars['DateTimeType'];
};

export type ContractTypeMetricChartArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<ContractMetricChartFilterInputType>;
  sort?: Maybe<Array<ContractMetricChartSortInputType>>;
  pagination?: Maybe<ContractMetricChartPaginationInputType>;
};

export type ContractUpdateInputType = {
  /** Blockchain protocol */
  blockchain?: Maybe<BlockchainEnum>;
  /** Blockchain network */
  network?: Maybe<Scalars['String']>;
  /** Address */
  address?: Maybe<Scalars['String']>;
  /** Contract deployment block number */
  deployBlockNumber?: Maybe<Scalars['String']>;
  /** Adapter name */
  adapter?: Maybe<Scalars['String']>;
  /** Layout name */
  layout?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Website URL */
  link?: Maybe<Scalars['String']>;
  /** Is hidden */
  hidden?: Maybe<Scalars['Boolean']>;
};

export type GovProposalFilterInputType = {
  network: Scalars['String'];
  contract: Scalars['String'];
  proposalId: Scalars['Int'];
  cache: Scalars['Boolean'];
};

export type GovProposalListFilterInputType = {
  network: Scalars['String'];
  contract: Scalars['String'];
  cache: Scalars['Boolean'];
};

export type GovProposalListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type GovProposalListQuery = {
  __typename?: 'GovProposalListQuery';
  /** Elements */
  list?: Maybe<Array<GovProposalType>>;
  pagination: Pagination;
};

export type GovProposalListSortInputType = {
  column: GovProposalListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum GovProposalListSortInputTypeColumnEnum {
  Id = 'id'
}

export enum GovProposalStateEnum {
  Pending = 'pending',
  Active = 'active',
  Canceled = 'canceled',
  Defeated = 'defeated',
  Succeeded = 'succeeded',
  Queued = 'queued',
  Expired = 'expired',
  Executed = 'executed'
}

export type GovProposalType = {
  __typename?: 'GovProposalType';
  /** Identificator */
  id: Scalars['Int'];
  /** Proposer */
  proposer: Scalars['String'];
  /** The timesamp that the protposal will be available for execution, set once the vote succeeds */
  eta: Scalars['Int'];
  /** Target addresses for calls */
  targets: Array<Scalars['String']>;
  /** List of values to be passed to the calls */
  values: Array<Scalars['String']>;
  /** List of function signatures to be calls */
  signatures: Array<Scalars['String']>;
  /** List of calldata to be passed to each call */
  calldatas: Array<Array<Scalars['String']>>;
  /** Start block of vote */
  startBlock: Scalars['Int'];
  /** End block of vote */
  endBlock: Scalars['Int'];
  /** End vote datetime */
  endVoteDate: Scalars['DateTimeType'];
  /** For votes */
  forVotes: Scalars['String'];
  /** Against votes */
  againstVotes: Scalars['String'];
  /** Abstain votes */
  abstainVotes: Scalars['String'];
  /** Is canceled */
  canceled: Scalars['Boolean'];
  /** Is executed */
  executed: Scalars['Boolean'];
  /** Current state */
  state: GovProposalStateEnum;
  /** Description */
  description: Scalars['String'];
};

export type GovReceiptFilterInputType = {
  network: Scalars['Int'];
  contract: Scalars['String'];
  proposalId: Scalars['Int'];
  wallet: Scalars['String'];
  cache: Scalars['Boolean'];
};

export enum GovReceiptSupportEnum {
  Against = 'against',
  For = 'for',
  Abstain = 'Abstain'
}

export type GovReceiptType = {
  __typename?: 'GovReceiptType';
  /** Whether or not a vote has been cast */
  hasVoted: Scalars['Boolean'];
  /** Whether or not the voter supports the proposal or abstains */
  support: GovReceiptSupportEnum;
  /** The number of votes the voter had, which were cast */
  votes: Scalars['String'];
  /** The reason given for the vote by the voter */
  reason: Scalars['String'];
};

export type GovTokenCirculationType = {
  __typename?: 'GovTokenCirculationType';
  total: Scalars['String'];
  market: GovTokenCirculationValueType;
  rewards: GovTokenCirculationValueType;
  developers: GovTokenCirculationValueType;
  community: GovTokenCirculationValueType;
  earlyEcosistem: GovTokenCirculationValueType;
};

export type GovTokenCirculationValueType = {
  __typename?: 'GovTokenCirculationValueType';
  timeLeft: Scalars['String'];
  timeTotal: Scalars['String'];
  tokenLeft: Scalars['String'];
  tokenTotal: Scalars['String'];
};

export type GovTokenFilterInputType = {
  network: Scalars['Int'];
  contract: Scalars['String'];
};

export type GovTokenType = {
  __typename?: 'GovTokenType';
  price: Scalars['String'];
  totalSupply: Scalars['String'];
  marketCap: Scalars['String'];
  circulation: GovTokenCirculationType;
};

export type GovVoteType = {
  __typename?: 'GovVoteType';
  votes: Scalars['String'];
  delegates: Scalars['String'];
};

export type GovVotesFilterInputType = {
  network: Scalars['Int'];
  contract: Scalars['String'];
  wallet: Scalars['String'];
};

export enum LocaleEnum {
  EnUs = 'enUS',
  RuRu = 'ruRU'
}

export type MetricChartType = {
  __typename?: 'MetricChartType';
  date: Scalars['DateTimeType'];
  min: Scalars['String'];
  max: Scalars['String'];
  avg: Scalars['String'];
  sum: Scalars['String'];
  count: Scalars['String'];
};

export enum MetricGroupEnum {
  Hour = 'hour',
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year'
}

export type Mutation = {
  __typename?: 'Mutation';
  authEth?: Maybe<AuthType>;
  authWaves?: Maybe<AuthType>;
  addWallet?: Maybe<AuthType>;
  walletUpdate: WalletType;
  walletDelete: Scalars['Boolean'];
  protocolCreate: ProtocolType;
  protocolUpdate: ProtocolType;
  protocolDelete: Scalars['Boolean'];
  contractCreate: ContractType;
  contractUpdate: ContractType;
  contractDelete: Scalars['Boolean'];
  contractWalletLink: Scalars['Boolean'];
  contractWalletUnlink: Scalars['Boolean'];
  proposalCreate: ProposalType;
  proposalUpdate: ProposalType;
  proposalDelete: Scalars['Boolean'];
  vote: VoteType;
  unvote: Scalars['Boolean'];
  userContactCreate: UserContactType;
  userContactUpdate: UserContactType;
  userContactEmailConfirm: Scalars['Boolean'];
  userContactDelete: Scalars['Boolean'];
  userEventSubscriptionCreate: UserEventSubscriptionType;
  userEventSubscriptionDelete: Scalars['Boolean'];
  productCreate: StoreProductType;
  productUpdate: StoreProductType;
  productDelete: Scalars['Boolean'];
  automateTriggerCreate: AutomateTriggerType;
  automateTriggerUpdate: AutomateTriggerType;
  automateTriggerDelete: Scalars['Boolean'];
  automateConditionCreate: AutomateConditionType;
  automateConditionUpdate: AutomateConditionType;
  automateConditionDelete: Scalars['Boolean'];
  automateActionCreate: AutomateActionType;
  automateActionUpdate: AutomateActionType;
  automateActionDelete: Scalars['Boolean'];
  automateContractCreate: AutomateContractType;
  automateContractUpdate: AutomateContractType;
  automateContractDelete: Scalars['Boolean'];
};

export type MutationAuthEthArgs = {
  input: AuthEthereumInputType;
};

export type MutationAuthWavesArgs = {
  input: AuthWavesInputType;
};

export type MutationAddWalletArgs = {
  input: AddWalletInputType;
};

export type MutationWalletUpdateArgs = {
  id: Scalars['UuidType'];
  input: WalletUpdateInputType;
};

export type MutationWalletDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationProtocolCreateArgs = {
  input: ProtocolCreateInputType;
};

export type MutationProtocolUpdateArgs = {
  id: Scalars['UuidType'];
  input: ProtocolUpdateInputType;
};

export type MutationProtocolDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationContractCreateArgs = {
  protocol: Scalars['UuidType'];
  input: ContractCreateInputType;
};

export type MutationContractUpdateArgs = {
  id: Scalars['UuidType'];
  input: ContractUpdateInputType;
};

export type MutationContractDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationContractWalletLinkArgs = {
  contract: Scalars['UuidType'];
  wallet: Scalars['UuidType'];
};

export type MutationContractWalletUnlinkArgs = {
  contract: Scalars['UuidType'];
  wallet: Scalars['UuidType'];
};

export type MutationProposalCreateArgs = {
  input: ProposalCreateInputType;
};

export type MutationProposalUpdateArgs = {
  id: Scalars['UuidType'];
  input: ProposalUpdateInputType;
};

export type MutationProposalDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationVoteArgs = {
  proposal: Scalars['UuidType'];
};

export type MutationUnvoteArgs = {
  proposal: Scalars['UuidType'];
};

export type MutationUserContactCreateArgs = {
  input: UserContactCreateInputType;
};

export type MutationUserContactUpdateArgs = {
  id: Scalars['UuidType'];
  input: UserContactUpdateInputType;
};

export type MutationUserContactEmailConfirmArgs = {
  input: UserContactConfirmEmailInputType;
};

export type MutationUserContactDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationUserEventSubscriptionCreateArgs = {
  input: UserEventSubscriptionCreateInputType;
};

export type MutationUserEventSubscriptionDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationProductCreateArgs = {
  input: StoreProductCreateInputType;
};

export type MutationProductUpdateArgs = {
  id: Scalars['UuidType'];
  input: StoreProductUpdateInputType;
};

export type MutationProductDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationAutomateTriggerCreateArgs = {
  input: AutomateTriggerCreateInputType;
};

export type MutationAutomateTriggerUpdateArgs = {
  input: AutomateTriggerUpdateInputType;
};

export type MutationAutomateTriggerDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationAutomateConditionCreateArgs = {
  input: AutomateConditionCreateInputType;
};

export type MutationAutomateConditionUpdateArgs = {
  input: AutomateConditionUpdateInputType;
};

export type MutationAutomateConditionDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationAutomateActionCreateArgs = {
  input: AutomateActionCreateInputType;
};

export type MutationAutomateActionUpdateArgs = {
  input: AutomateActionUpdateInputType;
};

export type MutationAutomateActionDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationAutomateContractCreateArgs = {
  input: AutomateContractCreateInputType;
};

export type MutationAutomateContractUpdateArgs = {
  input: AutomateContractUpdateInputType;
};

export type MutationAutomateContractDeleteArgs = {
  id: Scalars['UuidType'];
};

export type Pagination = {
  __typename?: 'Pagination';
  /** Count of list elements */
  count: Scalars['Int'];
};

export type ProposalCreateInputType = {
  /** Title */
  title: Scalars['String'];
  /** Description */
  description: Scalars['String'];
};

export type ProposalFilterInputType = {
  id: Scalars['String'];
};

export type ProposalListFilterInputType = {
  author?: Maybe<Scalars['UuidType']>;
  status?: Maybe<ProposalStatusEnum>;
  search?: Maybe<Scalars['String']>;
};

export type ProposalListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ProposalListQuery = {
  __typename?: 'ProposalListQuery';
  /** Elements */
  list?: Maybe<Array<ProposalType>>;
  pagination: Pagination;
};

export type ProposalListSortInputType = {
  column: ProposalListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ProposalListSortInputTypeColumnEnum {
  Id = 'id',
  Title = 'title',
  CreatedAt = 'createdAt'
}

export enum ProposalStatusEnum {
  /** Proposal is open for vote */
  Open = 'open',
  /** Proposal is executed */
  Executed = 'executed',
  /** Proposal is defeated */
  Defeated = 'defeated'
}

export type ProposalType = {
  __typename?: 'ProposalType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Title */
  title: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  /** Current status */
  status: ProposalStatusEnum;
  /** Author */
  author?: Maybe<UserType>;
  votes: VoteListType;
  /** Date of updated */
  updatedAt: Scalars['DateTimeType'];
  /** Date of created */
  createdAt: Scalars['DateTimeType'];
};

export type ProposalTypeVotesArgs = {
  filter?: Maybe<VoteListFilterInputType>;
  sort?: Maybe<Array<VoteListSortInputType>>;
  pagination?: Maybe<VoteListPaginationInputType>;
};

export type ProposalUpdateInputType = {
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Current status */
  status?: Maybe<ProposalStatusEnum>;
};

export type ProtocolCreateInputType = {
  /** Adapter name */
  adapter: Scalars['String'];
  /** Name */
  name: Scalars['String'];
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Icon image URL */
  icon?: Maybe<Scalars['String']>;
  /** Website URL */
  link?: Maybe<Scalars['String']>;
  /** Is hidden */
  hidden?: Maybe<Scalars['Boolean']>;
};

export type ProtocolFilterInputType = {
  id?: Maybe<Scalars['UuidType']>;
  adapter?: Maybe<Scalars['String']>;
};

export type ProtocolListFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  /** Target user ID */
  linked?: Maybe<Scalars['UuidType']>;
  hidden?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
};

export type ProtocolListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ProtocolListQuery = {
  __typename?: 'ProtocolListQuery';
  /** Elements */
  list?: Maybe<Array<ProtocolType>>;
  pagination: Pagination;
};

export type ProtocolListSortInputType = {
  column: ProtocolListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ProtocolListSortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  Address = 'address',
  CreatedAt = 'createdAt'
}

export type ProtocolMetricChartFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type ProtocolMetricChartPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ProtocolMetricChartSortInputType = {
  column: ProtocolMetricChartSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ProtocolMetricChartSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type ProtocolType = {
  __typename?: 'ProtocolType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Adapter name */
  adapter: Scalars['String'];
  /** Name */
  name: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  /** Icon image URL */
  icon?: Maybe<Scalars['String']>;
  /** Website URL */
  link?: Maybe<Scalars['String']>;
  /** Is hidden */
  hidden: Scalars['Boolean'];
  contracts: ContractListType;
  metricChart: Array<MetricChartType>;
  /** Date of created account */
  createdAt: Scalars['DateTimeType'];
};

export type ProtocolTypeContractsArgs = {
  filter?: Maybe<ContractListFilterInputType>;
  sort?: Maybe<Array<ContractListSortInputType>>;
  pagination?: Maybe<ContractListPaginationInputType>;
};

export type ProtocolTypeMetricChartArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<ProtocolMetricChartFilterInputType>;
  sort?: Maybe<Array<ProtocolMetricChartSortInputType>>;
  pagination?: Maybe<ProtocolMetricChartPaginationInputType>;
};

export type ProtocolUpdateInputType = {
  /** Adapter name */
  adapter?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Icon image URL */
  icon?: Maybe<Scalars['String']>;
  /** Website URL */
  link?: Maybe<Scalars['String']>;
  /** Is hidden */
  hidden?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  ping: Scalars['String'];
  me?: Maybe<UserType>;
  protocol?: Maybe<ProtocolType>;
  protocols: ProtocolListQuery;
  proposal?: Maybe<ProposalType>;
  proposals: ProposalListQuery;
  userContact?: Maybe<UserContactType>;
  userContacts: UserContactListQuery;
  userEventSubscription?: Maybe<UserEventSubscriptionType>;
  userEventSubscriptions: UserEventSubscriptionListQuery;
  tokens: TokenListQuery;
  tokenAlias?: Maybe<TokenAlias>;
  tokensAlias: TokenAliasListQuery;
  products: StoreProductListQuery;
  govProposal?: Maybe<GovProposalType>;
  govProposals: GovProposalListQuery;
  govReceipt?: Maybe<GovReceiptType>;
  govVotes: GovVoteType;
  automateTrigger?: Maybe<AutomateTriggerType>;
  automateTriggers: AutomateTriggerListQuery;
  automateContracts: AutomateContractListQuery;
  govToken: GovTokenType;
  restakeStrategy: RestakeStrategyType;
  treasury: TreasuryType;
};

export type QueryProtocolArgs = {
  filter: ProtocolFilterInputType;
};

export type QueryProtocolsArgs = {
  filter?: Maybe<ProtocolListFilterInputType>;
  sort?: Maybe<Array<ProtocolListSortInputType>>;
  pagination?: Maybe<ProtocolListPaginationInputType>;
};

export type QueryProposalArgs = {
  filter: ProposalFilterInputType;
};

export type QueryProposalsArgs = {
  filter?: Maybe<ProposalListFilterInputType>;
  sort?: Maybe<Array<ProposalListSortInputType>>;
  pagination?: Maybe<ProposalListPaginationInputType>;
};

export type QueryUserContactArgs = {
  filter: UserContactFilterInputType;
};

export type QueryUserContactsArgs = {
  filter?: Maybe<UserContactListQueryFilterInputType>;
  sort?: Maybe<Array<UserContactListSortInputType>>;
  pagination?: Maybe<UserContactListPaginationInputType>;
};

export type QueryUserEventSubscriptionArgs = {
  filter: UserEventSubscriptionInputType;
};

export type QueryUserEventSubscriptionsArgs = {
  filter?: Maybe<UserEventSubscriptionListQueryFilterInputType>;
  sort?: Maybe<Array<UserEventSubscriptionListSortInputType>>;
  pagination?: Maybe<UserEventSubscriptionListPaginationInputType>;
};

export type QueryTokensArgs = {
  filter?: Maybe<TokenListQueryFilterInputType>;
  sort?: Maybe<Array<TokenListQuerySortInputType>>;
  pagination?: Maybe<TokenListQueryPaginationInputType>;
};

export type QueryTokenAliasArgs = {
  filter: TokenAliasFilterInputType;
};

export type QueryTokensAliasArgs = {
  filter?: Maybe<TokenAliasListFilterInputType>;
  sort?: Maybe<Array<TokenAliasListSortInputType>>;
  pagination?: Maybe<TokenAliasListPaginationInputType>;
};

export type QueryProductsArgs = {
  filter?: Maybe<StoreProductListQueryFilterInputType>;
  sort?: Maybe<Array<StoreProductListQuerySortInputType>>;
  pagination?: Maybe<StoreProductListQueryPaginationInputType>;
};

export type QueryGovProposalArgs = {
  filter: GovProposalFilterInputType;
};

export type QueryGovProposalsArgs = {
  filter: GovProposalListFilterInputType;
  sort?: Maybe<Array<GovProposalListSortInputType>>;
  pagination?: Maybe<GovProposalListPaginationInputType>;
};

export type QueryGovReceiptArgs = {
  filter: GovReceiptFilterInputType;
};

export type QueryGovVotesArgs = {
  filter: GovVotesFilterInputType;
};

export type QueryAutomateTriggerArgs = {
  filter: AutomateTriggerFilterInputType;
};

export type QueryAutomateTriggersArgs = {
  filter?: Maybe<AutomateTriggerListFilterInputType>;
  sort?: Maybe<Array<AutomateTriggerListSortInputType>>;
  pagination?: Maybe<AutomateTriggerListPaginationInputType>;
};

export type QueryAutomateContractsArgs = {
  filter?: Maybe<AutomateContractListFilterInputType>;
  sort?: Maybe<Array<AutomateContractListSortInputType>>;
  pagination?: Maybe<AutomateContractListPaginationInputType>;
};

export type QueryGovTokenArgs = {
  filter: GovTokenFilterInputType;
};

export type QueryRestakeStrategyArgs = {
  balance: Scalars['Float'];
  apy: Scalars['Float'];
};

export type RestakeStrategyPointType = {
  __typename?: 'RestakeStrategyPointType';
  v: Scalars['Float'];
  t: Scalars['Float'];
};

export type RestakeStrategyType = {
  __typename?: 'RestakeStrategyType';
  hold: Array<RestakeStrategyPointType>;
  everyDay: Array<RestakeStrategyPointType>;
  optimal: Array<RestakeStrategyPointType>;
};

export enum SortOrderEnum {
  /** Ascending */
  Asc = 'asc',
  /** Descending */
  Desc = 'desc'
}

export enum StoreProductCodeEnum {
  /** Notification */
  Notification = 'notification'
}

export type StoreProductCreateInputType = {
  /** Number of blockchain */
  number: Scalars['Int'];
  /** System code */
  code: StoreProductCodeEnum;
  /** Name */
  name: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  /** Price in USD */
  priceUSD: Scalars['Float'];
  /** Amount of product */
  amount: Scalars['Int'];
};

export type StoreProductListQuery = {
  __typename?: 'StoreProductListQuery';
  /** Elements */
  list?: Maybe<Array<StoreProductType>>;
  pagination: Pagination;
};

export type StoreProductListQueryFilterInputType = {
  code?: Maybe<Array<StoreProductCodeEnum>>;
  search?: Maybe<Scalars['String']>;
};

export type StoreProductListQueryPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type StoreProductListQuerySortInputType = {
  column: StoreProductListQuerySortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum StoreProductListQuerySortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  CreatedAt = 'createdAt'
}

export type StoreProductType = {
  __typename?: 'StoreProductType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Number of blockchain */
  number: Scalars['Int'];
  /** System code */
  code: StoreProductCodeEnum;
  /** Name */
  name: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  /** Price in USD */
  priceUSD: Scalars['Float'];
  /** Amount product */
  amount: Scalars['Int'];
  purchases: StorePurchaseListType;
  /** Date of updated */
  updatedAt: Scalars['DateTimeType'];
  /** Date of created */
  createdAt: Scalars['DateTimeType'];
};

export type StoreProductTypePurchasesArgs = {
  filter?: Maybe<StorePurchaseListFilterInputType>;
  sort?: Maybe<Array<StorePurchaseListSortInputType>>;
  pagination?: Maybe<StorePurchaseListPaginationInputType>;
};

export type StoreProductUpdateInputType = {
  /** Number of blockchain */
  number: Scalars['Int'];
  /** System code */
  code: StoreProductCodeEnum;
  /** Name */
  name: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  /** Price in USD */
  priceUSD: Scalars['Float'];
  /** Amount of product */
  amount: Scalars['Int'];
};

export type StorePurchaseListFilterInputType = {
  user?: Maybe<Scalars['UuidType']>;
};

export type StorePurchaseListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type StorePurchaseListSortInputType = {
  column: StorePurchaseListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum StorePurchaseListSortInputTypeColumnEnum {
  Id = 'id',
  CreatedAt = 'createdAt'
}

export type StorePurchaseListType = {
  __typename?: 'StorePurchaseListType';
  /** Elements */
  list?: Maybe<Array<StorePurchaseType>>;
  pagination: Pagination;
};

export type StorePurchaseType = {
  __typename?: 'StorePurchaseType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Blockchain type */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  /** Account */
  account: Scalars['String'];
  /** Amount product */
  amount: Scalars['Int'];
  /** Transaction id */
  tx: Scalars['String'];
  /** Date of created */
  createdAt: Scalars['DateTimeType'];
};

export type TokenAlias = {
  __typename?: 'TokenAlias';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Name */
  name: Scalars['String'];
  /** Symbol */
  symbol: Scalars['String'];
  /** Is stable price */
  stable: Scalars['Boolean'];
  tokens: TokenListType;
};

export type TokenAliasTokensArgs = {
  filter?: Maybe<TokenListFilterInputType>;
  sort?: Maybe<Array<TokenListSortInputType>>;
  pagination?: Maybe<TokenListPaginationInputType>;
};

export type TokenAliasFilterInputType = {
  id: Scalars['String'];
};

export type TokenAliasListFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  stable?: Maybe<Scalars['Boolean']>;
  symbol?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
};

export type TokenAliasListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type TokenAliasListQuery = {
  __typename?: 'TokenAliasListQuery';
  /** Elements */
  list?: Maybe<Array<TokenAlias>>;
  pagination: Pagination;
};

export type TokenAliasListSortInputType = {
  column: TokenAliasListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum TokenAliasListSortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  CreatedAt = 'createdAt'
}

export type TokenListFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  address?: Maybe<Array<Scalars['String']>>;
  search?: Maybe<Scalars['String']>;
};

export type TokenListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type TokenListQuery = {
  __typename?: 'TokenListQuery';
  /** Elements */
  list?: Maybe<Array<TokenType>>;
  pagination: Pagination;
};

export type TokenListQueryFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  address?: Maybe<Array<Scalars['String']>>;
  search?: Maybe<Scalars['String']>;
};

export type TokenListQueryPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type TokenListQuerySortInputType = {
  column: TokenListQuerySortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum TokenListQuerySortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  CreatedAt = 'createdAt'
}

export type TokenListSortInputType = {
  column: TokenListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum TokenListSortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Address = 'address',
  CreatedAt = 'createdAt'
}

export type TokenListType = {
  __typename?: 'TokenListType';
  /** Elements */
  list?: Maybe<Array<TokenType>>;
  pagination: Pagination;
};

export type TokenType = {
  __typename?: 'TokenType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Token alias id */
  alias: Scalars['String'];
  /** Blockchain type */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  /** Address */
  address: Scalars['String'];
  /** Name */
  name: Scalars['String'];
  /** Symbol */
  symbol: Scalars['String'];
  /** Decimals */
  decimals: Scalars['Int'];
};

export type TreasuryType = {
  __typename?: 'TreasuryType';
  balanceUSD: Scalars['Float'];
};

export type UserBillingBillListFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  status?: Maybe<BillingBillStatusEnum>;
};

export type UserBillingBillListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserBillingBillListSortInputType = {
  column: UserBillingBillListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserBillingBillListSortInputTypeColumnEnum {
  Id = 'id',
  UpdatedAt = 'updatedAt',
  CreatedAt = 'createdAt'
}

export type UserBillingBillListType = {
  __typename?: 'UserBillingBillListType';
  /** Elements */
  list?: Maybe<Array<BillingBillType>>;
  pagination: Pagination;
};

export type UserBillingTransferListFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  deposit?: Maybe<Scalars['Boolean']>;
  claim?: Maybe<Scalars['Boolean']>;
  wallet?: Maybe<Array<Scalars['UuidType']>>;
};

export type UserBillingTransferListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserBillingTransferListSortInputType = {
  column: UserBillingTransferListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserBillingTransferListSortInputTypeColumnEnum {
  Id = 'id',
  Amount = 'amount',
  CreatedAt = 'createdAt'
}

export type UserBillingTransferListType = {
  __typename?: 'UserBillingTransferListType';
  /** Elements */
  list?: Maybe<Array<BillingTransferType>>;
  pagination: Pagination;
};

export type UserBillingType = {
  __typename?: 'UserBillingType';
  transfers: UserBillingTransferListType;
  bills: UserBillingBillListType;
  balance: BillingBalanceType;
};

export type UserBillingTypeTransfersArgs = {
  filter?: Maybe<UserBillingTransferListFilterInputType>;
  sort?: Maybe<Array<UserBillingTransferListSortInputType>>;
  pagination?: Maybe<UserBillingTransferListPaginationInputType>;
};

export type UserBillingTypeBillsArgs = {
  filter?: Maybe<UserBillingBillListFilterInputType>;
  sort?: Maybe<Array<UserBillingBillListSortInputType>>;
  pagination?: Maybe<UserBillingBillListPaginationInputType>;
};

export type UserBlockchainType = {
  __typename?: 'UserBlockchainType';
  name: Scalars['String'];
  /** Blockchain type */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  wallets: UserBlockchainWalletListType;
  tokenMetricChart: Array<MetricChartType>;
};

export type UserBlockchainTypeWalletsArgs = {
  filter?: Maybe<UserBlockchainWalletListFilterInputType>;
  sort?: Maybe<Array<UserBlockchainWalletListSortInputType>>;
  pagination?: Maybe<UserBlockchainWalletListPaginationInputType>;
};

export type UserBlockchainTypeTokenMetricChartArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<UserBlockchainWalletTokenMetricChartFilterInputType>;
  sort?: Maybe<Array<UserBlockchainWalletTokenMetricChartSortInputType>>;
  pagination?: Maybe<UserBlockchainWalletTokenMetricChartPaginationInputType>;
};

export type UserBlockchainWalletListFilterInputType = {
  search?: Maybe<Scalars['String']>;
};

export type UserBlockchainWalletListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserBlockchainWalletListSortInputType = {
  column: UserBlockchainWalletListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserBlockchainWalletListSortInputTypeColumnEnum {
  Id = 'id',
  Address = 'address',
  CreatedAt = 'createdAt'
}

export type UserBlockchainWalletListType = {
  __typename?: 'UserBlockchainWalletListType';
  /** Elements */
  list?: Maybe<Array<WalletType>>;
  pagination: Pagination;
};

export type UserBlockchainWalletTokenMetricChartFilterInputType = {
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type UserBlockchainWalletTokenMetricChartPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserBlockchainWalletTokenMetricChartSortInputType = {
  column: UserBlockchainWalletTokenMetricChartSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserBlockchainWalletTokenMetricChartSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export enum UserContactBrokerEnum {
  /** Email */
  Email = 'email',
  /** Telegram */
  Telegram = 'telegram'
}

export type UserContactConfirmEmailInputType = {
  /** code */
  confirmationCode: Scalars['String'];
};

export type UserContactCreateInputType = {
  /** Type */
  broker: UserContactBrokerEnum;
  /** Address */
  address: Scalars['String'];
  /** Name */
  name: Scalars['String'];
};

export type UserContactFilterInputType = {
  id: Scalars['String'];
};

export type UserContactListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserContactListQuery = {
  __typename?: 'UserContactListQuery';
  /** Elements */
  list?: Maybe<Array<UserContactType>>;
  pagination: Pagination;
};

export type UserContactListQueryFilterInputType = {
  /** User ID */
  user?: Maybe<Scalars['UuidType']>;
  /** Type */
  broker?: Maybe<UserContactBrokerEnum>;
  /** Status */
  status?: Maybe<UserContactStatusEnum>;
  search?: Maybe<Scalars['String']>;
};

export type UserContactListSortInputType = {
  column: UserContactListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserContactListSortInputTypeColumnEnum {
  Id = 'id',
  CreatedAt = 'createdAt'
}

export enum UserContactStatusEnum {
  /** Has been activated */
  Active = 'active',
  /** Has not been activated yet */
  Inactive = 'inactive'
}

export type UserContactType = {
  __typename?: 'UserContactType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** User */
  user: UserType;
  /** Type of the contact */
  broker: UserContactBrokerEnum;
  /** Address */
  address: Scalars['String'];
  /** Name */
  name: Scalars['String'];
  /** Status */
  status: UserContactStatusEnum;
  /** Confirmation Code */
  confirmationCode: Scalars['String'];
  /** Date of create */
  createdAt: Scalars['DateTimeType'];
  /** Date of activated */
  activatedAt?: Maybe<Scalars['DateTimeType']>;
};

export type UserContactUpdateInputType = {
  /** Name */
  name?: Maybe<Scalars['String']>;
};

export type UserEventSubscriptionCreateInputType = {
  /** User contact id */
  contact: Scalars['String'];
  /** Contract id */
  contract: Scalars['String'];
  /** Event name */
  event: Scalars['String'];
};

export type UserEventSubscriptionInputType = {
  id: Scalars['UuidType'];
};

export type UserEventSubscriptionListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserEventSubscriptionListQuery = {
  __typename?: 'UserEventSubscriptionListQuery';
  /** Elements */
  list?: Maybe<Array<UserEventSubscriptionType>>;
  pagination: Pagination;
};

export type UserEventSubscriptionListQueryFilterInputType = {
  /** User ID */
  user?: Maybe<Scalars['UuidType']>;
  /** Contract Id */
  contract?: Maybe<Scalars['UuidType']>;
  /** Event */
  event?: Maybe<Scalars['String']>;
  /** User contact type */
  contactType?: Maybe<UserContactBrokerEnum>;
};

export type UserEventSubscriptionListSortInputType = {
  column: UserEventSubscriptionListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserEventSubscriptionListSortInputTypeColumnEnum {
  Id = 'id',
  CreatedAt = 'createdAt'
}

export type UserEventSubscriptionType = {
  __typename?: 'UserEventSubscriptionType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Contact */
  contact: UserContactType;
  /** Contract */
  contract: ContractType;
  /** Event */
  event: Scalars['String'];
  /** Date of create */
  createdAt: Scalars['DateTimeType'];
};

export type UserMetricChartFilterInputType = {
  /** Target contracts */
  contract?: Maybe<Array<Scalars['UuidType']>>;
  /** Target wallets */
  wallet?: Maybe<Array<Scalars['UuidType']>>;
  blockchain?: Maybe<BlockchainFilterInputType>;
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type UserMetricChartPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserMetricChartSortInputType = {
  column: UserMetricChartSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserMetricChartSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type UserMetricsTokenAliasFilterInputType = {
  id?: Maybe<Array<Scalars['UuidType']>>;
  /** Is stable token */
  stable?: Maybe<Scalars['Boolean']>;
};

export enum UserRoleEnum {
  /** Candidate */
  Candidate = 'candidate',
  /** User */
  User = 'user',
  /** Administrator */
  Admin = 'admin'
}

export type UserStoreBalanceType = {
  __typename?: 'UserStoreBalanceType';
  /** Available nofications count */
  notifications: Scalars['Int'];
};

export type UserStoreProductListFilterInputType = {
  code?: Maybe<Array<StoreProductCodeEnum>>;
};

export type UserStoreProductListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserStoreProductListSortInputType = {
  column: UserStoreProductListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserStoreProductListSortInputTypeColumnEnum {
  Id = 'id',
  CreatedAt = 'createdAt'
}

export type UserStoreProductListType = {
  __typename?: 'UserStoreProductListType';
  /** Elements */
  list?: Maybe<Array<StoreProductType>>;
  pagination: Pagination;
};

export type UserStorePurchaseListFilterInputType = {
  product?: Maybe<Array<Scalars['UuidType']>>;
};

export type UserStorePurchaseListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserStorePurchaseListSortInputType = {
  column: UserStorePurchaseListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserStorePurchaseListSortInputTypeColumnEnum {
  Id = 'id',
  CreatedAt = 'createdAt'
}

export type UserStorePurchaseListType = {
  __typename?: 'UserStorePurchaseListType';
  /** Elements */
  list?: Maybe<Array<StorePurchaseType>>;
  pagination: Pagination;
};

export type UserStoreType = {
  __typename?: 'UserStoreType';
  purchases: UserStorePurchaseListType;
  products: UserStoreProductListType;
  balance: UserStoreBalanceType;
};

export type UserStoreTypePurchasesArgs = {
  filter?: Maybe<UserStorePurchaseListFilterInputType>;
  sort?: Maybe<Array<UserStorePurchaseListSortInputType>>;
  pagination?: Maybe<UserStorePurchaseListPaginationInputType>;
};

export type UserStoreTypeProductsArgs = {
  filter?: Maybe<UserStoreProductListFilterInputType>;
  sort?: Maybe<Array<UserStoreProductListSortInputType>>;
  pagination?: Maybe<UserStoreProductListPaginationInputType>;
};

export type UserTokenMetricChartFilterInputType = {
  /** Target token alias */
  tokenAlias?: Maybe<UserMetricsTokenAliasFilterInputType>;
  /** Target token address */
  tokenAddress?: Maybe<Array<Scalars['String']>>;
  /** Target contracts */
  contract?: Maybe<Array<Scalars['UuidType']>>;
  blockchain?: Maybe<BlockchainFilterInputType>;
  /** Target wallets */
  wallet?: Maybe<Array<Scalars['UuidType']>>;
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type UserTokenMetricChartPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserTokenMetricChartSortInputType = {
  column: UserTokenMetricChartSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserTokenMetricChartSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type UserType = {
  __typename?: 'UserType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Access role */
  role: UserRoleEnum;
  /** Current user locale */
  locale: LocaleEnum;
  wallets: WalletListType;
  blockchains: Array<UserBlockchainType>;
  metricChart: Array<MetricChartType>;
  tokenMetricChart: Array<MetricChartType>;
  billing: UserBillingType;
  store: UserStoreType;
  /** Date of created account */
  createdAt: Scalars['DateTimeType'];
};

export type UserTypeWalletsArgs = {
  filter?: Maybe<WalletListFilterInputType>;
  sort?: Maybe<Array<WalletListSortInputType>>;
  pagination?: Maybe<WalletListPaginationInputType>;
};

export type UserTypeMetricChartArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<UserMetricChartFilterInputType>;
  sort?: Maybe<Array<UserMetricChartSortInputType>>;
  pagination?: Maybe<UserMetricChartPaginationInputType>;
};

export type UserTypeTokenMetricChartArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<UserTokenMetricChartFilterInputType>;
  sort?: Maybe<Array<UserTokenMetricChartSortInputType>>;
  pagination?: Maybe<UserTokenMetricChartPaginationInputType>;
};

export type VoteListFilterInputType = {
  user?: Maybe<Scalars['UuidType']>;
};

export type VoteListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type VoteListSortInputType = {
  column: VoteListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum VoteListSortInputTypeColumnEnum {
  Id = 'id',
  CreatedAt = 'createdAt'
}

export type VoteListType = {
  __typename?: 'VoteListType';
  /** Elements */
  list?: Maybe<Array<VoteType>>;
  pagination: Pagination;
};

export type VoteType = {
  __typename?: 'VoteType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Voting user */
  user: UserType;
  /** Date of updated */
  updatedAt: Scalars['DateTimeType'];
  /** Date of created */
  createdAt: Scalars['DateTimeType'];
};

export type WalletBillingBillListFilterInputType = {
  status?: Maybe<BillingBillStatusEnum>;
};

export type WalletBillingBillListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type WalletBillingBillListSortInputType = {
  column: WalletBillingBillListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum WalletBillingBillListSortInputTypeColumnEnum {
  Id = 'id',
  UpdatedAt = 'updatedAt',
  CreatedAt = 'createdAt'
}

export type WalletBillingBillListType = {
  __typename?: 'WalletBillingBillListType';
  /** Elements */
  list?: Maybe<Array<BillingBillType>>;
  pagination: Pagination;
};

export type WalletBillingTransferListFilterInputType = {
  deposit?: Maybe<Scalars['Boolean']>;
  claim?: Maybe<Scalars['Boolean']>;
};

export type WalletBillingTransferListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type WalletBillingTransferListSortInputType = {
  column: WalletBillingTransferListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum WalletBillingTransferListSortInputTypeColumnEnum {
  Id = 'id',
  Amount = 'amount',
  CreatedAt = 'createdAt'
}

export type WalletBillingTransferListType = {
  __typename?: 'WalletBillingTransferListType';
  /** Elements */
  list?: Maybe<Array<BillingTransferType>>;
  pagination: Pagination;
};

export type WalletBillingType = {
  __typename?: 'WalletBillingType';
  transfers: WalletBillingTransferListType;
  bills: WalletBillingBillListType;
  balance: BillingBalanceType;
};

export type WalletBillingTypeTransfersArgs = {
  filter?: Maybe<WalletBillingTransferListFilterInputType>;
  sort?: Maybe<Array<WalletBillingTransferListSortInputType>>;
  pagination?: Maybe<WalletBillingTransferListPaginationInputType>;
};

export type WalletBillingTypeBillsArgs = {
  filter?: Maybe<WalletBillingBillListFilterInputType>;
  sort?: Maybe<Array<WalletBillingBillListSortInputType>>;
  pagination?: Maybe<WalletBillingBillListPaginationInputType>;
};

export type WalletContractListFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  protocol?: Maybe<Array<Scalars['UuidType']>>;
  hidden?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
};

export type WalletContractListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type WalletContractListSortInputType = {
  column: WalletContractListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum WalletContractListSortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  Address = 'address',
  CreatedAt = 'createdAt'
}

export type WalletContractListType = {
  __typename?: 'WalletContractListType';
  /** Elements */
  list?: Maybe<Array<ContractType>>;
  pagination: Pagination;
};

export type WalletListFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  search?: Maybe<Scalars['String']>;
};

export type WalletListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type WalletListSortInputType = {
  column: WalletListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum WalletListSortInputTypeColumnEnum {
  Id = 'id',
  Address = 'address',
  CreatedAt = 'createdAt'
}

export type WalletListType = {
  __typename?: 'WalletListType';
  /** Elements */
  list?: Maybe<Array<WalletType>>;
  pagination: Pagination;
};

export type WalletMetricChartFilterInputType = {
  /** Target contracts */
  contract?: Maybe<Array<Scalars['UuidType']>>;
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type WalletMetricChartPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type WalletMetricChartSortInputType = {
  column: WalletMetricChartSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum WalletMetricChartSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type WalletTokenMetricChartFilterInputType = {
  /** Target token alias */
  tokenAlias?: Maybe<UserMetricsTokenAliasFilterInputType>;
  /** Target token address */
  tokenAddress?: Maybe<Array<Scalars['String']>>;
  /** Target contracts */
  contract?: Maybe<Array<Scalars['UuidType']>>;
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type WalletTokenMetricChartPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type WalletTokenMetricChartSortInputType = {
  column: WalletTokenMetricChartSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum WalletTokenMetricChartSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type WalletType = {
  __typename?: 'WalletType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Blockchain type */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  /** Address */
  address: Scalars['String'];
  /** Public key */
  publicKey: Scalars['String'];
  /** Name */
  name: Scalars['String'];
  contracts: WalletContractListType;
  metricChart: Array<MetricChartType>;
  tokenMetricChart: Array<MetricChartType>;
  billing: WalletBillingType;
  /** Date of created account */
  createdAt: Scalars['DateTimeType'];
};

export type WalletTypeContractsArgs = {
  filter?: Maybe<WalletContractListFilterInputType>;
  sort?: Maybe<Array<WalletContractListSortInputType>>;
  pagination?: Maybe<WalletContractListPaginationInputType>;
};

export type WalletTypeMetricChartArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<WalletMetricChartFilterInputType>;
  sort?: Maybe<Array<WalletMetricChartSortInputType>>;
  pagination?: Maybe<WalletMetricChartPaginationInputType>;
};

export type WalletTypeTokenMetricChartArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<WalletTokenMetricChartFilterInputType>;
  sort?: Maybe<Array<WalletTokenMetricChartSortInputType>>;
  pagination?: Maybe<WalletTokenMetricChartPaginationInputType>;
};

export type WalletUpdateInputType = {
  /** Name */
  name?: Maybe<Scalars['String']>;
};

export type TreasuryQueryVariables = Exact<{ [key: string]: never }>;

export type TreasuryQuery = { __typename?: 'Query' } & {
  treasury: { __typename?: 'TreasuryType' } & Pick<TreasuryType, 'balanceUSD'>;
};

export type ProtocolsQueryVariables = Exact<{ [key: string]: never }>;

export type ProtocolsQuery = { __typename?: 'Query' } & {
  protocols: { __typename?: 'ProtocolListQuery' } & {
    list?: Maybe<
      Array<
        { __typename?: 'ProtocolType' } & Pick<
          ProtocolType,
          'id' | 'name' | 'icon' | 'link'
        >
      >
    >;
  };
};

export type RestakeStrategyQueryVariables = Exact<{
  balance: Scalars['Float'];
  apy: Scalars['Float'];
}>;

export type RestakeStrategyQuery = { __typename?: 'Query' } & {
  restakeStrategy: { __typename?: 'RestakeStrategyType' } & {
    hold: Array<
      { __typename?: 'RestakeStrategyPointType' } & Pick<
        RestakeStrategyPointType,
        'v' | 't'
      >
    >;
    everyDay: Array<
      { __typename?: 'RestakeStrategyPointType' } & Pick<
        RestakeStrategyPointType,
        'v' | 't'
      >
    >;
    optimal: Array<
      { __typename?: 'RestakeStrategyPointType' } & Pick<
        RestakeStrategyPointType,
        'v' | 't'
      >
    >;
  };
};

export type GovTokenFragmentFragment = {
  __typename?: 'GovTokenCirculationValueType';
} & Pick<
  GovTokenCirculationValueType,
  'timeLeft' | 'timeTotal' | 'tokenLeft' | 'tokenTotal'
>;

export type GovTokenQueryVariables = Exact<{
  filter: GovTokenFilterInputType;
}>;

export type GovTokenQuery = { __typename?: 'Query' } & {
  govToken: { __typename?: 'GovTokenType' } & Pick<
    GovTokenType,
    'price' | 'totalSupply' | 'marketCap'
  > & {
      circulation: { __typename?: 'GovTokenCirculationType' } & Pick<
        GovTokenCirculationType,
        'total'
      > & {
          market: {
            __typename?: 'GovTokenCirculationValueType';
          } & GovTokenFragmentFragment;
          rewards: {
            __typename?: 'GovTokenCirculationValueType';
          } & GovTokenFragmentFragment;
          developers: {
            __typename?: 'GovTokenCirculationValueType';
          } & GovTokenFragmentFragment;
          community: {
            __typename?: 'GovTokenCirculationValueType';
          } & GovTokenFragmentFragment;
          earlyEcosistem: {
            __typename?: 'GovTokenCirculationValueType';
          } & GovTokenFragmentFragment;
        };
    };
};
