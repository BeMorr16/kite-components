export function getFocusableElements(element: HTMLElement): HTMLElement[] {
    return Array.from(
      element.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter(
      (el) => el.getAttribute('aria-hidden') !== 'true' && 
        getComputedStyle(el).display !== 'none'
    ) as HTMLElement[];
  }