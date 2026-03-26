import { skeleton } from '../../utils';

const IntroCard = ({
  intro,
  loading,
}: {
  intro?: string;
  loading: boolean;
}) => {
  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">About Me</span>
            )}
          </h5>
        </div>
        <div className="text-base-content opacity-60 font-normal whitespace-pre-line text-justify px-3">
          {loading ? (
            skeleton({ widthCls: 'w-full', heightCls: 'h-24' })
          ) : (
            intro
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
