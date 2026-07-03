export default function Logo({ className = '', size = 48, showText = true, light = false }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img
        src="/images/logo-da.png"
        alt="Logo Darul Akhyar"
        width={size}
        height={size}
        className="shrink-0 object-contain"
      />
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-sans font-bold tracking-tight text-lg ${light ? 'text-white' : 'text-emerald-950'}`}>
            Darul Akhyar
          </span>
          <span className={`font-sans text-[10px] tracking-widest uppercase mt-0.5 font-medium ${light ? 'text-emerald-200' : 'text-emerald-600'}`}>
            Pondok Pesantren
          </span>
        </div>
      )}
    </div>
  );
}
