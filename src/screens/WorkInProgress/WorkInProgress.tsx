import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export const WorkInProgress = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-4 h-[50vh]">
      <h1 className="flex text-4xl font-bold">
        Work in Progress... <span className="flex justify-center items-center text-2xl animate-spin">⚙️</span>
      </h1>

      <p className="text-lg">
        We're busy fine-tuning the high notes to bring you an encore performance of features. The stage is being set,
        and the curtains will rise soon. Stay tuned! 🚀
      </p>

      <Link to="/">
        <Button className="w-[200px]">Back to Home</Button>
      </Link>
    </div>
  );
};
