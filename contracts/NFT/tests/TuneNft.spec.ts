import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { Cell, toNano } from 'ton-core';
import { TuneNft } from '../wrappers/TuneNft';
import '@ton-community/test-utils';
import { compile } from '@ton-community/blueprint';

describe('TuneNft', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('TuneNft');
    });

    let blockchain: Blockchain;
    let tuneNft: SandboxContract<TuneNft>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        tuneNft = blockchain.openContract(TuneNft.createFromConfig({}, code));

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await tuneNft.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: tuneNft.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and tuneNft are ready to use
    });
});
