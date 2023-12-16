import { useDispatch } from 'react-redux';

import { BountiesModal } from '@/components/bounties-modal';
import { Button } from '@/components/ui/button';
import { openModal } from '@/store/slices/modals';

export const Bounties = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-3xl mb-5">Bounties Page</h1>
      <Button onClick={() => dispatch(openModal('bountiesModal'))}>Open Bounties Modal</Button>

      <BountiesModal />
    </>
  );
};
