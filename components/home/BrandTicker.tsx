const ITEMS = [
  'STA-BIL®',
  'Distribuidor Oficial Bolivia',
  'Fórmulas Patentadas',
  '#1 en Estados Unidos',
  'Gold Eagle Co.',
  'Desde 1932',
  'Garantía Incondicional',
  'Made in USA',
  '22 Productos',
  'La Medicina Preventiva de tu Motor',
];

export default function BrandTicker() {
  // Duplicate array so the CSS infinite loop looks seamless
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden bg-[#C8281E] py-3 border-y border-[#A01F17]">
      <div className="flex animate-ticker" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-5 whitespace-nowrap text-white text-[11px] font-bold uppercase tracking-[0.2em]"
          >
            {item}
            <span
              className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
