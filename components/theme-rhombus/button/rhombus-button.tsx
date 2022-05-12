import Icon from '@mdi/react';

export type Props = {
  label: string;
  iconSrc?: string;
  iconMdi?: string; // from '@mdi/js'
};

const RhombusButton = (props: Props) => {
  return (
    <>
      <style jsx>{`
        .rhombus_button:hover > .rhombus_button__bg {
          --tw-bg-opacity: 1;
          background-color: rgb(190 18 60 / var(--tw-bg-opacity));
        }
      `}</style>
      <button
        type="button"
        className="rhombus_button relative w-fit px-2 py-2 bg-transparent text-white leading-none flex flex-row items-center justify-center"
      >
        <div className="rbtn__bg absolute w-full h-full left-0 top-0 -z-10 -skew-x-12 bg-rose-600 transition-all"></div>
        {props.iconSrc ? (
          <img className="rbtn__icon_img h-4" src={props.iconSrc} alt="icon" />
        ) : null}
        {props.iconMdi ? (
          <Icon path={props.iconMdi} className="rbtn__icon_mdi h-6" />
        ) : null}
        <div className="rbtn__text px-1">{props.label}</div>
      </button>
    </>
  );
};

export default RhombusButton;
