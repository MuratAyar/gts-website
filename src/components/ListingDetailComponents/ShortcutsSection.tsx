import React, { useState } from 'react';
import {
  UserIcon,
  PrinterIcon,
  StarIcon,
  ShareIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline';

const baseBtn =
  'inline-flex items-center gap-2 rounded border px-4 py-2 text-sm font-medium shadow-sm transition';

const ShortcutButton: React.FC<
  React.PropsWithChildren<{
    active?: boolean;
    primary?: boolean;
    onClick?: () => void;
  }>
> = ({ children, primary, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`${baseBtn} ${
      primary
        ? 'bg-gray-800 text-white hover:bg-gray-700'
        : active
        ? 'bg-gray-200 border-gray-300'
        : 'bg-white border-gray-300 hover:bg-gray-50'
    }`}
  >
    {children}
  </button>
);

/* ─────────────── component ─────────────── */

interface ShortcutsSectionProps {
  /** Callback to aç the “Contact seller” modal (örn. setOpen(true)) */
  onContactSeller?: () => void;
}

const ShortcutsSection: React.FC<ShortcutsSectionProps> = ({
  onContactSeller,
}) => {
  const [watchlisted, setWatchlisted] = useState(false);

  const handlePrint = () => window.print();

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: window.location.href,
        })
        .catch(() => {
          /* user cancelled share sheet */
        });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <section
      id="listing-shortcuts"
      className="mt-6 rounded border bg-gray-50 p-2"
    >
      <div className="flex flex-col gap-2 lg:flex-row">
        {/* CONTACT SELLER – primary */}
        <ShortcutButton
          primary
          onClick={() =>
            onContactSeller ? onContactSeller() : alert('Open contact form')
          }
        >
          <UserIcon className="h-5 w-5" />
          Contact seller
        </ShortcutButton>

        {/* PRINT PAGE */}
        <ShortcutButton onClick={handlePrint}>
          <PrinterIcon className="h-5 w-5" />
          Print page
        </ShortcutButton>

        {/* WATCHLIST */}
        <ShortcutButton
          active={watchlisted}
          onClick={() => setWatchlisted((p) => !p)}
        >
          <StarIcon
            className={`h-5 w-5 ${watchlisted ? 'fill-yellow-500' : ''}`}
          />
          {watchlisted ? 'Saved' : 'Add to watchlist'}
        </ShortcutButton>

        {/* SHARE */}
        <ShortcutButton onClick={handleShare}>
          <ShareIcon className="h-5 w-5" />
          Share
        </ShortcutButton>

        {/* REPORT */}
        <ShortcutButton onClick={() => alert('Report dialog')}>
          <MegaphoneIcon className="h-5 w-5" />
          Report listing
        </ShortcutButton>
      </div>
    </section>
  );
};

export default ShortcutsSection;
