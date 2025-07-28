// src/utils/scrollObserver.ts

export class ScrollObserver {
  private observer: IntersectionObserver;
  
  constructor(options?: IntersectionObserverInit) {
    const defaultOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1,
      ...options
    };
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Optional: unobserve after animation to improve performance
          // this.observer.unobserve(entry.target);
        }
      });
    }, defaultOptions);
  }
  
  observe(element: Element) {
    this.observer.observe(element);
  }
  
  observeAll(selector: string) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => this.observe(element));
  }
  
  disconnect() {
    this.observer.disconnect();
  }
}

// Hook for React components
import { useEffect, useRef } from 'react';

export const useScrollAnimation = (options?: IntersectionObserverInit) => {
  const elementRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new ScrollObserver(options);
    observer.observe(element);
    
    return () => observer.disconnect();
  }, []);
  
  return elementRef;
};

// Global initialization for non-React elements
export const initScrollAnimations = () => {
  const observer = new ScrollObserver();
  observer.observeAll('.scroll-animate');
  
  // Re-observe on route changes if using SPA
  return () => observer.disconnect();
};