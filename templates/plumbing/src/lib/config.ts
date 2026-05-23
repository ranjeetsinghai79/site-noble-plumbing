import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Noble Plumbing",
    tagline: "Your Trusted Local Plumbers",
    phone: "(209) 566-5420",
    phoneHref: "tel:+12095665420",
    email: "info@nobleplumbing.com",
    address: "123 Main St",
    city: "Modesto",
    serviceAreas: ["Modesto", "Tracy", "Manteca", "Stockton", "Sacramento", "Central Valley"],
    license: "CA C36-123456",
    since: "2016",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "ocean",
    niche: "plumbing",
  },

  services: [
    { icon: "droplets", title: "Drain Cleaning", desc: "Expert drain cleaning to clear clogs and restore flow efficiently.", urgent: false },
    { icon: "droplets", title: "Leak Detection & Repair", desc: "Advanced leak detection and precise repair to prevent water damage.", urgent: false },
    { icon: "flame", title: "Water Heater Services", desc: "Installation, repair, and maintenance for all types of water heaters.", urgent: false },
    { icon: "droplets", title: "Sewer Line Services", desc: "Comprehensive sewer line repair, replacement, and cleaning solutions.", urgent: false },
    { icon: "droplets", title: "Toilet & Faucet Services", desc: "Repair and installation for all toilets and faucets, stopping leaks and drips.", urgent: false },
    { icon: "zap", title: "24/7 Emergency Plumbing", desc: "Rapid response for all plumbing emergencies, day or night.", urgent: true }
  ],

  testimonials: [
    { name: "Sarah M.", location: "Modesto", stars: 5, text: "Noble Plumbing saved us! Our water heater burst on a Sunday morning. They arrived within an hour, assessed the damage, and had a new unit installed by the afternoon. Professional, quick, and incredibly reassuring during a stressful time. Highly recommend their emergency service!" },
    { name: "David L.", location: "Tracy", stars: 5, text: "We had a persistent leak under our sink that other plumbers couldn't find. Noble Plumbing's technician used specialized equipment, located the leak quickly, and fixed it on the spot. The pricing was fair, and the service was exceptional. Finally, no more drips!" },
    { name: "Jessica P.", location: "Manteca", stars: 5, text: "Our drains were constantly backing up, making daily life a nightmare. Noble Plumbing came out, performed a thorough drain cleaning, and even showed us the camera footage. Everything flows perfectly now. They were courteous, clean, and very efficient. Thank you, Noble Plumbing!" }
  ],

  trustBadges: [
    "Licensed, Bonded, Insured", "24/7 Emergency Service", "Free Estimates", "8+ Years Experience", "Customer-Centric Approach", "Fluent in Spanish"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 8, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We arrive quickly to address your plumbing emergencies and routine service needs." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Transparent, honest pricing with no hidden fees, so you know what to expect." },
    { icon: "award", title: "Certified Pros", desc: "Our plumbers are highly trained, licensed, and dedicated to quality workmanship." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work, ensuring your complete satisfaction with every job." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our AI receptionist is always available to assist you, day or night." },
    { icon: "truck", title: "Fully Equipped", desc: "Our service vehicles are stocked with the latest tools and parts for efficient service." }
  ],

  formServiceOptions: ["Drain Cleaning", "Leak Detection & Repair", "Water Heater Services", "Sewer Line Services", "Toilet & Faucet Services", "Gas Piping & Repiping", "Plumbing for Remodels", "24/7 Emergency Plumbing", "Residential Plumbing", "Commercial Plumbing"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!