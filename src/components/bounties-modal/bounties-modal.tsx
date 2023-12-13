import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button.tsx';
import {
  Dialog, DialogClose,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx';
import { RootState } from '@/store/reducer.ts';
import { closeModal } from '@/store/slices/modals.ts';

export const BountiesModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.bountiesModal);

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) return;
    dispatch(closeModal('bountiesModal'));
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => handleOpenChange(open)}>
      <DialogContent className='max-w-[425px] mx-auto'>
        <DialogHeader className='mb-4'>
          <DialogTitle className='text-2xl font-bold'>🌟 Explore Bounties! 🌟</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className='bounty-task mb-6'>
            <DialogTitle className='text-xl font-bold mb-2'>🎶&nbsp;&nbsp;Discover Artists</DialogTitle>

            <p>
              <strong>Description:</strong> Follow three new artists on Tontune. Add fresh vibes to your playlist.
            </p>
            <p>
              <strong>Reward:</strong> Receive X Tontune tokens for connecting with new talent.
            </p>
            <p>
              <strong>Claim:</strong> Follow three new artists on Tontune. Tokens will be credited to your account.
            </p>
          </div>

          <div className='bounty-task mb-6'>
            <DialogTitle className='text-xl font-bold mb-2'>🎧&nbsp;&nbsp;Music Explorer</DialogTitle>

            <p>
              <strong>Description:</strong> Listen to 10 new tracks on Tontune and experience undiscovered melodies.
            </p>
            <p>
              <strong>Reward:</strong> Earn X Tontune tokens for your exploratory spirit.
            </p>
            <p>
              <strong>Claim:</strong> Listen to 10 new tracks. Tokens will be added to your wallet.
            </p>
          </div>

          <div className='bounty-task mb-6'>
            <DialogTitle className='text-xl font-bold mb-2'>🖼️&nbsp;&nbsp;NFT Supporter</DialogTitle>

            <p>
              <strong>Description:</strong> Mint the latest NFTs on Tontune and support artists' creative journey.
            </p>
            <p>
              <strong>Reward:</strong> Receive X Tontune tokens as a thank you for NFT minting.
            </p>
            <p>
              <strong>Claim:</strong> Mint any new artist NFT. Tokens will be credited upon confirmation.
            </p>
          </div>
          <DialogFooter className='sm:justify-start'>
            <DialogClose asChild>
              <Button onClick={() => dispatch(closeModal('bountiesModal'))} type='button' variant='link'>
                <Link to='/bounties'>Learn more</Link>
              </Button>
            </DialogClose>
          </DialogFooter>

        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
