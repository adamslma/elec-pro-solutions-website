type DirectionalIconProps = Readonly<{
  className?: string;
}>;

export function ArrowUpRightIcon({
  className = "size-4",
}: DirectionalIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none">
      <path
        d="M4 16 16 4M7 4h9v9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.65"
      />
    </svg>
  );
}

export function ArrowDownIcon({
  className = "size-4",
}: DirectionalIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none">
      <path
        d="M10 3v13M5 11l5 5 5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.65"
      />
    </svg>
  );
}

export function ArrowLeftIcon({
  className = "size-4",
}: DirectionalIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none">
      <path
        d="M16 10H4m5-5-5 5 5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.65"
      />
    </svg>
  );
}

export function ArrowRightIcon({
  className = "size-4",
}: DirectionalIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none">
      <path
        d="M4 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.65"
      />
    </svg>
  );
}
