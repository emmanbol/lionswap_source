import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x80f3cA389E4B9B4140fb8a89FEA8b161465d8933', // TODO  0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb
  [ChainId.BSCTESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
