import React from 'react';

interface PriceCalloutProps {
  label?: string;
  price: string;
  subtitle?: string;
  className?: string;
  accentColor?: 'blue' | 'green';
  details?: {
    retailPrice?: number;
    insuranceCoverage?: number;
  };
}

export const PriceCallout: React.FC<PriceCalloutProps> = ({
  label = 'You may pay',
  price,
  subtitle,
  className = '',
  accentColor = 'blue',
  details,
}) => {
  return (
    <div
      className={`rounded-2xl p-4 bg-[#EDF4FF] border border-[#D5E5FD] ${className}`}
    >
      <span className="text-xs font-normal text-slate-600 block">
        {label}
      </span>
      <div className="mt-1 flex items-baseline gap-1">
        <span
          className={`text-3xl sm:text-4xl font-bold tracking-tight ${
            accentColor === 'green' ? 'text-emerald-700' : 'text-[#1B64F2]'
          }`}
        >
          {price}
        </span>
      </div>
      {subtitle && (
        <p className="mt-1 text-xs text-slate-500 leading-snug">
          {subtitle}
        </p>
      )}

      {details && (
        <div className="mt-3 pt-3 border-t border-[#D5E5FD] space-y-1 text-xs">
          {details.retailPrice !== undefined && (
            <div className="flex justify-between items-center text-slate-700">
              <span>Provider price</span>
              <span className="font-semibold text-slate-900">
                ₹{details.retailPrice.toLocaleString()}
              </span>
            </div>
          )}
          {details.insuranceCoverage !== undefined && (
            <div className="flex justify-between items-center text-emerald-700">
              <span>Expected insurance coverage</span>
              <span className="font-semibold">
                -₹{details.insuranceCoverage.toLocaleString()}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
