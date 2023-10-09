# TonTune Contrtacts

Contracts are based on TEP62 and TEP66 standards. Particularly, there is a customized contract for NFT Collection and basic NFT item contract. 

You can use the deployment and minting scripts, if you want to reproduce the on-chain flow manually. (see below)


## Project structure

-   `contracts` - source code of all the smart contracts of the project and their dependencies.
-   `wrappers` - wrapper classes (implementing `Contract` from ton-core) for the contracts, including any [de]serialization primitives and compilation functions.
-   `tests` - tests for the contracts.
-   `scripts` - scripts used by the project, mainly the deployment scripts.

## How to use

### Build (compile)

`npx blueprint build` or `yarn blueprint build`

### Test

`npx blueprint test` or `yarn blueprint test`

### Deploy or run another script

`npx blueprint run` or `yarn blueprint run`
