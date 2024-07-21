import clsx from "clsx";

type Props = React.ComponentProps<"input"> & {
  label?: string;
  className?: string;
  co?: {
    label?: string;
    input?: string;
  };
};

const InputTex = ({ label = "", co, className = "", ...props }: Props) => {
  return (
    <div className={clsx("flex flex-col w-full mb-4", className)}>
      {label && (
        <label
          htmlFor={props.id}
          className={clsx("font-bold text-base mb-2", co?.label)}
        >
          {label}
        </label>
      )}
      <input
        type="text"
        name={props.name}
        id={props.id}
        {...props}
        className={clsx(
          "border border-gray-300 px-2 py-2.5 rounded-lg",
          co?.input
        )}
      />
    </div>
  );
};

export default InputTex;
