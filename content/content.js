/**
 * Website Content Configuration
 * This file contains all the text content and configuration for the website
 */

export const content = {
  // Company information
  company: {
    name: "Onecera Bond",
    tagline: "Superior bonding solutions for construction professionals.",
    description: "Quality products for lasting results.",
    phone: "+91 123-456-7890",
    email: "info@onecerabond.com",
    address: {
      india:
        "Plot no 58, near Shiv Mandir, Pocket A, Junpat Village, Junpat, Greater Noida, Uttar Pradesh 201310, India",
      usa: "Maryland, USA",
    },
    usaPhone: "+1 410-417-8048",
    usaEmail: "usa@onecerabond.com",
    businessHours: {
      weekdays: "Monday–Saturday: 9 AM–6 PM",
      sunday: "Sunday: Closed",
      detailed: [
        { day: "Monday", hours: "9 AM–6 PM" },
        { day: "Tuesday", hours: "9 AM–6 PM" },
        { day: "Wednesday", hours: "9 AM–6 PM" },
        { day: "Thursday", hours: "9 AM–6 PM" },
        { day: "Friday", hours: "9 AM–6 PM" },
        { day: "Saturday", hours: "9 AM–6 PM" },
        { day: "Sunday", hours: "Closed" },
      ],
      usa: "Monday–Friday: 9 AM–5 PM (EST)",
    },
    // Social media links
    socialMedia: [
      {
        name: "Facebook",
        url: "https://facebook.com/onecerabond",
        icon: "Facebook",
      },
      {
        name: "Instagram",
        url: "https://instagram.com/onecerabond",
        icon: "Instagram",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/onecerabond",
        icon: "Twitter",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/company/onecerabond",
        icon: "Linkedin",
      },
      {
        name: "YouTube",
        url: "https://youtube.com/onecerabond",
        icon: "Youtube",
      },
    ],
  },

  // Navigation menu items
  navigation: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "/products" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],

  // Hero section content
  hero: {
    title: "Superior Bonding Solutions",
    subtitle: "for Construction Professionals",
    description:
      "Onecera bond delivers high-performance tile adhesives and construction materials that ensure lasting quality and reliability.",
    buttons: [
      {
        text: "Explore Products",
        href: "/products",
        primary: true,
      },
      {
        text: "Contact Us",
        href: "#contact",
        primary: false,
      },
    ],
  },

  // Quick info cards content
  quickInfo: [
    {
      title: "Business Hours",
      description: "Mon–Sat: 9 AM–6 PM | Sun: Closed",
      icon: "Clock",
    },
    {
      title: "Location",
      description: "Greater Noida, India & Maryland, USA",
      icon: "MapPin",
    },
    {
      title: "Contact",
      description: "+91 123-456-7890 | +1 410-417-8048",
      icon: "Phone",
    },
  ],

  // About section content
  about: {
    title: "About Us",
    paragraphs: [
      "Onecera Bond is a leading manufacturer of high-quality tile adhesives and construction materials in India with an international office in Maryland, USA. With years of industry experience, we have established ourselves as a trusted partner for construction professionals and homeowners alike.",
      "Our state-of-the-art manufacturing facility in Greater Noida ensures that every product meets the highest standards of quality and performance. We combine innovative technology with traditional expertise to deliver solutions that stand the test of time.",
      "At Onecera Bond, we are committed to sustainability and environmental responsibility. Our products are designed to minimize environmental impact while maximizing efficiency and durability.",
      "Our grouts, cleaners, and adhesives are developed using advanced USA-based technology, ensuring superior performance, durability, and safety for all applications.",
    ],
    image: {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Onecera Bond manufacturing facility",
    },
  },

  // Technology section content
  technology: {
    title: "USA-Based Technology",
    description:
      "Our products are developed using cutting-edge American technology and expertise.",
    features: [
      {
        title: "Advanced Grout Technology",
        description:
          "Our grouts utilize USA-developed polymer technology for superior strength, flexibility, and stain resistance.",
      },
      {
        title: "Premium Adhesive Formulations",
        description:
          "American engineering behind our adhesives ensures exceptional bonding strength and durability in all conditions.",
      },
      {
        title: "Eco-Friendly Cleaners",
        description:
          "USA-based research has helped us develop effective cleaners that are both powerful and environmentally responsible.",
      },
    ],
  },

  // Testimonials section content
  testimonials: {
    title: "Customer Testimonials",
    description:
      "Don't just take our word for it. Here's what our customers have to say about Onecera Bond products.",
    items: [
      {
        name: "Rajesh Kumar",
        role: "Construction Contractor",
        quote:
          "I've been using Onecera Bond tile adhesives for over 3 years now. The quality is consistently excellent, and my clients are always satisfied with the results.",
        image: {
          src: "/placeholder.svg?height=100&width=100",
          alt: "Rajesh Kumar",
        },
      },
      {
        name: "Priya Sharma",
        role: "Interior Designer",
        quote:
          "The waterproof grout from Onecera Bond is a game-changer for bathroom renovations. It's easy to apply and provides excellent resistance to moisture.",
        image: {
          src: "/placeholder.svg?height=100&width=100",
          alt: "Priya Sharma",
        },
      },
      {
        name: "Amit Patel",
        role: "Property Developer",
        quote:
          "We've completed several large-scale projects using Onecera Bond products. Their technical support team is always helpful, and the products perform exceptionally well.",
        image: {
          src: "/placeholder.svg?height=100&width=100",
          alt: "Amit Patel",
        },
      },
    ],
  },

  // Contact section content
  contact: {
    title: "Contact Us",
    description:
      "Have questions about our products or services? Get in touch with our team, and we'll be happy to assist you.",
    contactInfo: [
      {
        type: "address",
        icon: "MapPin",
        content: [
          "India Office: Plot no 58, near Shiv Mandir, Pocket A, Junpat Village, Junpat, Greater Noida, Uttar Pradesh 201310, India",
          "USA Office: Maryland, USA",
        ],
      },
      {
        type: "phone",
        icon: "Phone",
        content: ["India: +91 123-456-7890", "USA: +1 410-417-8048"],
      },
      {
        type: "email",
        icon: "Mail",
        content: ["India: info@onecerabond.com", "USA: usa@onecerabond.com"],
      },
      {
        type: "hours",
        icon: "Clock",
        content: [
          "India: Monday–Saturday: 9 AM–6 PM IST | Sunday: Closed",
          "USA: Monday–Friday: 9 AM–5 PM EST",
        ],
      },
    ],
    // Contact form fields
    form: {
      title: "Send us a message",
      fields: [
        { id: "name", label: "Name", type: "text", placeholder: "Your name" },
        {
          id: "email",
          label: "Email",
          type: "email",
          placeholder: "Your email",
        },
        {
          id: "subject",
          label: "Subject",
          type: "text",
          placeholder: "Subject",
        },
        {
          id: "message",
          label: "Message",
          type: "textarea",
          placeholder: "Your message",
          rows: 4,
        },
      ],
      submitText: "Send Message",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2615928550894!2d77.5118!3d28.4738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI4JzI1LjciTiA3N8KwMzAnNDIuNSJF!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin",
  },

  // Footer content
  footer: {
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "#about" },
      { name: "Products", href: "/products" },
      { name: "Contact", href: "#contact" },
    ],
    copyright: "© {year} Onecera Bond. All rights reserved.",
  },
};

export default content;
