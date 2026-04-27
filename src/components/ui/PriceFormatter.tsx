interface PriceFormatterProps {
  amount: number;
  currency?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const PriceFormatter = ({ 
  amount, 
  currency = 'PHP', 
  className = "", 
  size = 'md' 
}: PriceFormatterProps) => {
  
  const formatted = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: currency,
  }).formatToParts(amount);

  // We find all parts of the number except currency and decimals
  // This ensures "5,000" stays together
  const currencySymbol = formatted.find(p => p.type === 'currency')?.value;
  const integerParts = formatted.filter(p => ['integer', 'group'].includes(p.type))
                                .map(p => p.value).join('');
  const decimalPart = formatted.find(p => p.type === 'fraction')?.value || "00";

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
    xl: "text-4xl" // Increased for larger PHP values
  };

  return (
    <div className={`inline-flex items-baseline font-bold tracking-tight ${sizeClasses[size]} ${className}`}>
      {/* PHP Symbol */}
      <span className="text-[0.6em] text-primary-600 mr-1 font-medium">
        {currencySymbol}
      </span>
      
      {/* Main Number (e.g., 5,000) */}
      <span className="text-text-primary">
        {integerParts}
      </span>
      
      {/* Cents */}
      <span className="text-[0.55em] text-text-secondary ml-0.5 font-normal">
        .{decimalPart}
      </span>
    </div>
  );
};

export default PriceFormatter;