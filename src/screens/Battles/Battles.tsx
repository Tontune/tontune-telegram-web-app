import BattleCard from '@/components/cards/battle-card';

import avatar3 from '/public/img/avatars/avatar3.png';
import avatar11 from '/public/img/avatars/avatar11.png';

export function Battles() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      <h2 className="mb-4 text-navy-700 text-2xl font-bold dark:text-white">Battles</h2>

      <BattleCard
        title="Luna Harmonix or Eclipse Rhythm?"
        imageLeft={avatar3}
        imageRight={avatar11}
        buttonLeft="Luna"
        buttonRight="Eclipse"
      />
    </div>
  );
}
