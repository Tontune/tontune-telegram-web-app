import Card from '@/components/cards/card';

const BountyCard = (props: {
  title: string;
  total: number;
  completed: number;
  reward: string;
  onClick?: () => void;
}) => {
  const { title, total, completed, reward, onClick } = props;

  return (
    <Card extra="flex flex-col min-w-[205px] max-w-[205px] h-[120px] bg-white">
      <div className="flex flex-col p-2.5 pt-[15px]">
        <h1 className="text-start text-base capitalize font-medium mb-2">{title}</h1>

        <div className="flex justify-start">
          <div className="flex flex-col-reverse justify-center mr-1.5">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column-reverse',
                height: '35px',
                width: '8px',
                borderRadius: '10px',
                backgroundColor: '#9CA3AF',
                overflow: 'hidden',
              }}
            >
              {Array.from({ length: total }).map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    height: `${100 / total}%`,
                    width: '100%',
                    backgroundColor: idx < completed ? '#60A5FA' : 'transparent',
                    transition: 'background-color 0.3s ease-in-out',
                  }}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <span className="font-semibold text-lg text-black">{completed}</span>{' '}
            <span className="font-medium text-sm text-[#9CA3AF] ml-1">/ {total}</span>
          </div>
        </div>
      </div>

      <div
        className="flex items-center justify-center cursor-pointer bg-button h-full rounded-b-[20px] text-primary text-base font-medium"
        onClick={onClick}
      >
        {total === completed ? '🎁 Claim' : reward}
      </div>
    </Card>
  );
};

export default BountyCard;
