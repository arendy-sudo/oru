class Gallery {
  constructor() {
    this.currentImageIndex = 2; // Start with the active thumbnail (index 2)
    this.images = [
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-05/HdDthfkSF2.png',
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-05/YvPahT3GnR.png',
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-05/fRyS8cvzoP.png',
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-05/6vzrQzuDsn.png',
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-05/mC6JOTjkx3.png'
    ];
    
    this.init();
  }

  init() {
    this.bindEvents();
    this.updateMainImage();
  }

  bindEvents() {
    // Navigation buttons
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.previousImage());
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextImage());
    }

    // Thumbnail clicks
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => this.selectImage(index));
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.previousImage();
      } else if (e.key === 'ArrowRight') {
        this.nextImage();
      }
    });
  }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.updateMainImage();
    this.updateThumbnails();
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.updateMainImage();
    this.updateThumbnails();
  }

  selectImage(index) {
    this.currentImageIndex = index;
    this.updateMainImage();
    this.updateThumbnails();
  }

  updateMainImage() {
    const mainImage = document.querySelector('.main-image');
    if (mainImage) {
      mainImage.src = this.images[this.currentImageIndex];
      mainImage.alt = `Imagen de galería ${this.currentImageIndex + 1}`;
    }
  }

  updateThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.classList.toggle('active', index === this.currentImageIndex);
    });
  }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Gallery();
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});
