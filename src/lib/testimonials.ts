// testimonials.ts - Data file for coachjack.xyz testimonials

export interface Testimonial {
  id: string;
  quote: string;
  shortQuote?: string; // For homepage display
  name: string;
  title?: string;
  company?: string;
  image?: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: `I could not possibly recommend Jack more highly\u2014both as a singular coaching talent and as a singular human. You won\u2019t regret having a chat with him, guaranteed. I began working with Jack in November, 2024. I had initially hired Jack because I\u2019d had the opportunity to get to know him on a professional & personal level in the year prior. In that time I quickly learned that we shared numerous parallels in our professional careers\u2014escalating titles and responsibilities in corporate sales organizations, a passion for professional excellence, team leadership and servant leadership. It was his diversity of roles and similar trajectory to leadership that gave me confidence Jack would be able to relate to me on a professional level. That was important to me in hiring a coach. However, I learned some other similarities between Jack and I that have proven significantly more meaningful, and they sustain our working relationship, and our friendship, today. Similar world views, shared beliefs around spirituality and human potential, and a mutual respect for the power of conscious awareness as a driver for both professional success and personal joy. Jack has always \u2018met me where I\u2019m at.\u2019 While we share many of the same views both personally and professionally, I have watched Jack serve several others from entirely diverse backgrounds, careers and communities. His core beliefs and professional style are expansive and truly accommodate everyone.`,
    shortQuote: `I could not possibly recommend Jack more highly\u2014both as a singular coaching talent and as a singular human. His core beliefs and professional style are expansive and truly accommodate everyone.`,
    name: "Client Name",
    title: "Title",
    company: "Company",
    featured: true,
  },
  {
    id: "2",
    quote: `Becoming the Bridge was a truly transformative experience. Jack and Chelsea created a space that felt safe, deeply supportive, and powerfully connective from day one. Their guidance, wisdom, and authenticity set the tone for a cohort where vulnerability was welcomed, growth was inevitable, and meaningful relationships were formed across gender and generations. The structure of the program struck the perfect balance\u2014thoughtfully designed, yet flexible and easeful\u2014making the learning both impactful and sustainable. In a world that often feels chaotic, this experience gave me hope, grounded me in practices that calm my nervous system, and reminded me of the power of intentional community. I am so grateful for this journey and the heart-centered leadership of Chels and Jack.`,
    shortQuote: `Becoming the Bridge was a truly transformative experience. Jack and Chelsea created a space that felt safe, deeply supportive, and powerfully connective from day one.`,
    name: "Client Name",
    title: "Title",
    company: "Company",
    featured: true,
  },
  {
    id: "3",
    quote: `Similar world views, shared beliefs around spirituality and human potential, and a mutual respect for the power of conscious awareness as a driver for both professional success and personal joy. Jack has always \u2018met me where I\u2019m at.\u2019`,
    name: "Client Name",
    title: "Founder",
    company: "Company",
    featured: true,
  },
];

// Helper function to get featured testimonials for homepage
export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter((t) => t.featured);
};

// Helper function to get all testimonials for testimonials page
export const getAllTestimonials = (): Testimonial[] => {
  return testimonials;
};
