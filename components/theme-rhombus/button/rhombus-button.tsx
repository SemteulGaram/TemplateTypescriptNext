import { css } from '@emotion/react';

export type Props = {
  label: string;
};

const RhombusButton = (props: Props) => {
  return (
    <button
      type="button"
      className="rhombus_button relative w-fit px-4 py-2 bg-transparent text-white leading-none transition-all hover:bg-rose-700"
      css={css`
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial,
          sans-serif;

        font-size: 999px !important;
      `}
    >
      <div className="absolute w-full h-full left-0 top-0 -skew-x-12 bg-rose-600 -z-10"></div>
      {props.label}
    </button>
  );
};

export default RhombusButton;
