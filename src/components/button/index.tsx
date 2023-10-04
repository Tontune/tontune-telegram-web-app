/* eslint-disable default-case */
import './style/dot-flashing.css';

function Button(props: {
  variant: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  spinner?: boolean;
  type?: 'button' | 'submit' | 'reset';
  extra?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  switch (props.variant) {
    case 'primary':
      return (
        <button
          onClick={props.onClick}
          disabled={props.disabled}
          type={props.type}
          className={`h-10 rounded-[20px] bg-brand-500 py-2 px-4 text-base font-semibold text-white transition duration-200 hover:bg-brand-600 disabled:bg-[#2A4EFF66] dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200 ${
            props.extra || 'w-full'
          } `}
        >
          {props.disabled && props.spinner ? (
            <div className="w-full flex justify-center content-center">
              <div className="dot-flashing" />
            </div>
          ) : (
            props.children
          )}
        </button>
      );
    case 'secondary':
      return (
        <button
          onClick={props.onClick}
          disabled={props.disabled}
          type={props.type}
          className={`h-10 rounded-md bg-blueAlpha-100 py-2 px-4 text-base font-semibold text-greyAlpha-700 transition duration-200 hover:text-greyAlpha-900 disabled:text-[#A3AED066] ${
            props.extra || 'w-full'
          }`}
        >
          {props.children}
        </button>
      );
    case 'danger':
      return (
        <button
          onClick={props.onClick}
          disabled={props.disabled}
          type={props.type}
          className={`h-10 rounded-md bg-[#FFF3F5] py-2 px-4 text-base font-semibold text-error transition duration-200 hover:text-[#FF6581] disabled:text-[#FE809766] ${
            props.extra || 'w-full'
          }`}
        >
          {props.children}
        </button>
      );
  }
}

export default Button;
