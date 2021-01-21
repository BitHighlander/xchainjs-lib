import { Asset, BaseAmount } from '@bithighlander/xchain-util'

export type ClientUrl = {
  testnet: string
  mainnet: string
}

export type ExplorerUrl = {
  testnet: string
  mainnet: string
}

export type ThorchainClientParams = {
  clientUrl?: ClientUrl
  explorerUrl?: ExplorerUrl
}

export type DepositParam = {
  asset?: Asset
  amount: BaseAmount
  memo: string
}

export const THORChain = 'THOR'
export const AssetRune: Asset = { chain: THORChain, symbol: 'RUNE', ticker: 'RUNE' }
