import { useFocusRing } from '@react-aria/focus';
import {
  Slider,
  SliderThumb,
  SliderTrack,
  type SliderProps,
} from 'react-aria-components';

export default function VolumeSlider<T extends number | number[]>({
  ...props
}: SliderProps<T>) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Slider
      {...props}
      className="min-w-[120px] text-white"
      aria-label="Volume slider"
    >
      <SliderTrack className="relative w-full h-6 cursor-pointer">
        {({ state }) => (
          <div
            role="slider"
            aria-valuemin={state.getThumbMinValue(0)}
            aria-valuemax={state.getThumbMaxValue(0)}
            aria-valuenow={state.getThumbValue(0)}
          >
            <div
              className={`
              absolute h-1 top-[50%] translate-y-[-50%]
              w-full rounded-full bg-white/40
            `}
            />
            <div
              className={`
                absolute h-1 top-[50%] translate-y-[-50%] rounded-full bg-white
              `}
              style={{ width: state.getThumbPercent(0) * 100 + '%' }}
            />
            <SliderThumb
              {...focusProps}
              className={`
              ${isFocusVisible ? 'ring ring-zinc-300' : ''}
              h-5 w-5 top-[50%] rounded-full bg-white border border-black/25
            `}
            />
          </div>
        )}
      </SliderTrack>
    </Slider>
  );
}