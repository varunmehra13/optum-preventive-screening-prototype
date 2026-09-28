import React from 'react';
import { ShieldCheck, Info, AlertCircle, CheckCircle2 } from 'lucide-react';

interface CoverageBadgeProps {
  status: 'verified' | 'estimated' | 'not_verified' | 'recommended' | 'available' | 'completed';
  customLabel?: string;
  size?: 'sm' | 'md';
}

export const CoverageBadge: React.FC<CoverageBadgeProps> = ({
  status,
  customLabel,
  size = 'md',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs';

  if (status === 'verified') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-[#EBF8F2] text-[#0F7645] border border-[#B9E9CF] ${sizeClasses}`}
      >
        <ShieldCheck className="w-3.5 h-3.5 stroke-[2.2]" />
        <span>{customLabel || 'Verified coverage'}</span>
      </span>
    );
  }

  if (status === 'estimated') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-[#FFF7E8] text-[#9A6200] border border-[#FDE1AA] ${sizeClasses}`}
      >
        <Info className="w-3.5 h-3.5 stroke-[2.2]" />
        <span>{customLabel || 'Estimated coverage'}</span>
      </span>
    );
  }

  if (status === 'recommended') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-[#EBF8F2] text-[#0F7645] border border-[#B9E9CF] ${sizeClasses}`}
      >
        <ShieldCheck className="w-3.5 h-3.5 stroke-[2.2]" />
        <span>{customLabel || 'Recommended'}</span>
      </span>
    );
  }

  if (status === 'available') {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full font-medium bg-[#EBF8F2] text-[#0F7645] border border-[#B9E9CF] ${sizeClasses}`}
      >
        <span>{customLabel || 'Available'}</span>
      </span>
    );
  }

  if (status === 'completed') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-[#EBF8F2] text-[#0F7645] border border-[#B9E9CF] ${sizeClasses}`}
      >
        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.2]" />
        <span>{customLabel || 'Completed'}</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-slate-100 text-slate-700 border border-slate-200 ${sizeClasses}`}
    >
      <AlertCircle className="w-3.5 h-3.5 stroke-[2.2]" />
      <span>{customLabel || 'Coverage not verified'}</span>
    </span>
  );
};
