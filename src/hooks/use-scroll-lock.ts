import { useEffect } from 'react';

/**
 * Hook to lock/unlock body scroll when modals are open
 * @param isLocked Whether scroll should be locked
 */
export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) {
      return;
    }

    // Save original body style
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const originalPaddingRight = window.getComputedStyle(document.body).paddingRight;
    
    // Get width of scrollbar to prevent content shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // Apply lock
    document.body.style.overflow = 'hidden';
    // Add padding to prevent content shift if scrollbar was visible
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    
    // Cleanup function to restore original styles
    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isLocked]); // Only re-run when isLocked changes
} 