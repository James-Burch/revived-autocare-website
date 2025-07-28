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

export const initScrollAnimations = () => {
  const observer = new ScrollObserver();
  observer.observeAll('.scroll-animate');
  
  return () => observer.disconnect();
};