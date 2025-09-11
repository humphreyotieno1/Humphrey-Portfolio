export default function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Humphrey Otieno",
    "jobTitle": "Full Stack Software Engineer",
    "description": "Experienced Full Stack Software Engineer specializing in React, Next.js, Python, and modern web technologies. Building exceptional digital experiences with a focus on performance, accessibility, and user satisfaction.",
    "url": "https://humphrey-portfolio-rho.vercel.app/",
    "image": "https://humphrey-portfolio-rho.vercel.app/hum.png",
    "sameAs": [
      "https://github.com/humphreyotieno1",
      "https://www.linkedin.com/in/humphrey-otieno",
      "https://x.com/_Banta__",
      "https://dev.to/banta",
      "https://discordapp.com/users/1150702066721890336"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "Node.js",
      "Django",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Web Development",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "API Development",
      "Web Design",
      "UI/UX Design",
      "Performance Optimization",
      "DevOps",
      "CI/CD"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
      "description": "Full Stack Software Engineer specializing in web development",
      "skills": [
        "React",
        "Next.js",
        "TypeScript",
        "Python",
        "Node.js",
        "Django",
        "FastAPI",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Kubernetes"
      ]
    },
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "ALX Africa"
      },
      {
        "@type": "Organization", 
        "name": "Moringa School"
      }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Software Engineer"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE"
    },
    "nationality": "Kenyan"
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Humphrey Otieno Portfolio",
    "url": "https://humphrey-portfolio-rho.vercel.app/",
    "description": "Portfolio website of Humphrey Otieno, Full Stack Software Engineer",
    "author": {
      "@type": "Person",
      "name": "Humphrey Otieno"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://humphrey-portfolio-rho.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Humphrey Otieno Software Development",
    "url": "https://humphrey-portfolio-rho.vercel.app/",
    "logo": "https://humphrey-portfolio-rho.vercel.app/humlogo.png",
    "description": "Professional software development services specializing in web applications, mobile apps, and full-stack solutions",
    "founder": {
      "@type": "Person",
      "name": "Humphrey Otieno"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "humphreyotieno1@gmail.com"
    },
    "sameAs": [
      "https://github.com/humphreyotieno1",
      "https://www.linkedin.com/in/humphrey-otieno",
      "https://x.com/_Banta__"
    ]
  }

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software Development Services",
    "description": "Professional software development services including web applications, mobile apps, and full-stack solutions",
    "provider": {
      "@type": "Person",
      "name": "Humphrey Otieno"
    },
    "areaServed": "Worldwide",
    "serviceType": "Software Development",
    "offers": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom web applications using React, Next.js, and modern technologies"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Cross-platform mobile applications"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Backend Development",
          "description": "API development and backend services using Python, Node.js"
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
    </>
  )
}
