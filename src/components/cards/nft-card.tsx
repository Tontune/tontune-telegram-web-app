import Card from '@/components/cards/card';
import { Button } from '@/components/ui/button.tsx';

const NftCard = (props: {
  image: string;
  title: string;
  author: string;
  download?: string;
  price?: string | number;
  extra?: string;
  onClick?: () => void;
  readonly?: boolean;
}) => {
  const { title, author, price, image, extra, onClick, readonly = false } = props;

  return (
    <Card extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}>
      <div className="h-full w-full">
        <div className="relative w-full">
          <img src={image} className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white"> {title} </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">By {author} </p>
          </div>
        </div>

        {!readonly && (
          <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
            <div className="flex">
              <p className="mb-2 text-sm font-bold text-brand-500 dark:text-white">
                Price: {price} <span>TON</span>
              </p>
            </div>
            <Button onClick={onClick}>MINT</Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default NftCard;
