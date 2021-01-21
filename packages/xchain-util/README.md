# `@bithighlander/xchain-util`

Utitity helpers for XChain clients

## Modules (in alphabetical order)

- `asset` - Utilities for handling assets
- `async` - Utitilies for `async` handling
- `bn` - Utitilies for using `bignumber.js`
- `chain` - Utilities for multi-chain
- `string` - Utilities for strings

## Usage

**BigNumber**

```
import bn, {
  isValidBN,
  bnOrZero,
  validBNOrZero,
  formatBN,
  formatBNCurrency,
  fixedBN
} from '@bithighlander/xchain-util'
```

**Async**

```
import delay from '@bithighlander/xchain-util'
```

**Asset Helpers**

```
import {
  assetAmount,
  baseAmount,
  isAssetAmount,
  isBaseAmount,
  baseToAsset,
  assetToBase,
  formatAssetAmount,
  formatBaseAsAssetAmount,
  formatAssetAmountCurrency,
} from '@bithighlander/xchain-util'
```

## Installation

```
yarn add @bithighlander/xchain-util
```

The following peer dependencies have to be installed into your project. These are not included in `@bithighlander/xchain-util`.

```
yarn add bignumber.js
```
