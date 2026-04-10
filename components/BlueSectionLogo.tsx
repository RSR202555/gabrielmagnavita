type BlueSectionLogoProps = {
  className?: string;
};

export default function BlueSectionLogo({ className = "" }: BlueSectionLogoProps) {
  return (
    <img
      src="/logo-mandala.png"
      alt=""
      aria-hidden="true"
      className={`object-contain ${className}`}
    />
  );
}
