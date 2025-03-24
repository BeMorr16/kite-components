export function getFocusableElements(element: HTMLElement): HTMLElement[] {
    return Array.from(
      element.querySelectorAll(
        'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(
      (el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
    ) as HTMLElement[];
  }