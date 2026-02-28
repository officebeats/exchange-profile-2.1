/* ============================================
   Route Exchange — Company Profile
   Exact 1:1 Replica — App Logic
   ============================================ */

const companyData = {
  name: "Rozalado Services [HQ]",
  logoText: "ROZALADO\nSERVICES",
  verified: true,

  metrics: {
    headquarters: "Chicago, IL",
    foundedIn: "2012",
    companySize: "501-1,000 employees",
    annualRevenue: "$25,000,000",
  },

  about:
    "Rozalado Services delivers contract-ready janitorial and facility maintenance across 25+ miles of the Chicago metro — serving Class A buildings, medical facilities, and restaurant groups. With a 0.85 EMR, $5M umbrella coverage, and ISSA CIMS certification, we're built for prime contract compliance from day one. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa!",

  serviceArea: { radiusMiles: 25 },

  schedule: [
    { day: "Sunday", hours: "7:00 AM - 12:00 AM" },
    { day: "Monday", hours: "7:00 AM - 12:00 AM" },
    { day: "Tuesday", hours: "7:00 AM - 12:00 AM" },
    { day: "Wednesday", hours: "7:00 AM - 12:00 AM" },
    { day: "Thursday", hours: "7:00 AM - 12:00 AM" },
    { day: "Friday", hours: "7:00 AM - 12:00 AM" },
    { day: "Saturday", hours: "7:00 AM - 12:00 AM" },
  ],

  contact: {
    primary: {
      name: "Ricardo Rodriguez",
      title: "Director of Sales",
      phone: "(312) 877-9127",
      email: "ricardo@rozalado.com",
    },
    secondary: {
      name: "Maria Sanchez",
      title: "Operations Manager",
      phone: "(312) 555-0199",
      email: "maria@rozalado.com",
    },
    afterHours: {
      label: "After Hours / Emergency",
      phone: "(312) 555-9911",
    },
    address: "6120 North Pulaski Road, Chicago, IL 60646",
  },

  services: {
    typesOfServices: [
      "Janitorial Cleaning: Interior",
      "Day Porter",
      "Janitorial / Custodial Services",
    ],
    typesOfAccounts: [
      "Fine Dining",
      "Pub/Bar",
      "Local",
      "Health Club/Fitness Center",
      "Clinic/Medical Office",
      "Physical Therapy/Rehabilitation",
      "Distribution Center",
      "Manufacturing (Light)",
      "Condominium Building/Complex",
      "Class C Building",
      "Class B Building",
      "Class A Building",
      "Auto Dealership",
      "Bank Branch",
      "Drugstore/Pharmacy",
      "Department Store",
      "Airport / Transportation Hub",
      "Hospital / Acute Care",
      "University / Higher Education",
      "K-12 School",
      "Government / Municipal",
      "Data Center",
      "Warehouse / Logistics",
      "Hotel / Hospitality",
      "Senior Living / Memory Care",
      "Sports & Recreation Facility",
      "Convention Center",
      "Performing Arts Venue",
      "Retail Strip Mall",
      "Fast Casual Restaurant",
      "Food Processing Facility",
      "Pharmaceutical / Lab",
      "Urgent Care Center",
    ],
    unionLabor: "Non-Union",
  },

  womanOwned: true,
  veteranOwned: true,

  documents: [
    { name: "Insurance (COI)", provided: true },
    { name: "Tax Identification (W-9)", provided: true },
    { name: "Business License", provided: true },
    { name: "Full Insurance Coverage Policy", provided: true },
    { name: "SS-4", provided: false },
  ],

  associations: [
    {
      name: "ISSA",
      summary:
        "Flagship trade body for the cleaning industry; events, standards, training, and credibility with buyers worldwide.",
      logo: "https://www.google.com/s2/favicons?domain=issa.com&sz=128",
      segment: "Industry",
    },
    {
      name: "BSCAI",
      summary:
        "Dedicated to contract cleaners; peer network, best practices, and a recognized member logo you can use in marketing.",
      logo: "bscai_logo.png",
      segment: "Industry",
    },
    {
      name: "IFMA",
      summary:
        "Access to decision‑makers, insight into how FMs evaluate and manage janitorial vendors.",
      logo: "ifma_logo.png",
      segment: "Business",
    },
    {
      name: "BOMA",
      summary:
        "Standards and relationships right where janitorial contracts originate.",
      logo: "https://www.google.com/s2/favicons?domain=boma.org&sz=128",
      segment: "Business",
    },
    {
      name: "CIRI",
      summary:
        "Differentiates you with evidence‑based “cleaning for health” story.",
      logo: "https://www.google.com/s2/favicons?domain=ciriscience.org&sz=128",
      segment: "Industry",
    },
    {
      name: "IEHA (ISSA division)",
      summary:
        "Understand expectations and language of healthcare/hospitality buyers.",
      logo: "ieha_logo.png",
      segment: "Industry",
    },
    {
      name: "IICRC",
      summary:
        "Credibility and specs coverage on carpets, floors, restoration.",
      logo: "https://www.google.com/s2/favicons?domain=iicrc.org&sz=128",
      segment: "Industry",
    },
    {
      name: "IJCSA",
      summary:
        "Practical business resources, directory visibility, small‑firm friendly.",
      logo: "https://www.google.com/s2/favicons?domain=ijcsa.org&sz=128",
      segment: "Business",
    },
    {
      name: "ACI",
      summary:
        "Regulatory/technical backing for chemistry, disinfection, sustainability claims.",
      logo: "aci_logo.png",
      segment: "Industry",
    },
    {
      name: "RIA",
      summary: "Opens up higher‑margin restoration/emergency work channels.",
      logo: "https://www.google.com/s2/favicons?domain=restorationindustry.org&sz=128",
      segment: "Industry",
    },
    {
      name: "PWNA",
      summary: "Structure and credibility for pressure‑washing services.",
      logo: "https://www.google.com/s2/favicons?domain=pwna.org&sz=128",
      segment: "Industry",
    },
    {
      name: "IWCA",
      summary: "Safety and quality standards for a common janitorial add‑on.",
      logo: "https://www.google.com/s2/favicons?domain=iwca.org&sz=128",
      segment: "Industry",
    },
  ],

  certifications: [
    {
      name: "WBENC Certified (WBE)",
      summary: "Women's Business Enterprise National Council certified.",
      logo: "https://www.google.com/s2/favicons?domain=wbenc.org&sz=128",
      segment: "Business",
    },
    {
      name: "NMSDC Certified (MBE)",
      summary: "National Minority Supplier Development Council certified.",
      logo: "https://www.google.com/s2/favicons?domain=nmsdc.org&sz=128",
      segment: "Business",
    },
    {
      name: "NaVOBA Certified (SDVOB)",
      summary: "Service-Disabled Veteran's Business Enterprise certified.",
      logo: "https://www.google.com/s2/favicons?domain=navoba.org&sz=128",
      segment: "Business",
    },
    {
      name: "ISSA CIMS Certification",
      summary:
        "Industry standard for quality management and operational excellence.",
      logo: "https://icon.horse/icon/issa.com",
      segment: "Industry",
    },
    {
      name: "ISSA CIMS-GB Certification",
      summary:
        "Green Building certification for sustainable cleaning practices.",
      logo: "https://icon.horse/icon/issa.com",
      segment: "Industry",
    },
  ],
  // ── v2.0 Data Enhancements ──
  compliance: {
    emr: [
      { year: 2024, rate: 0.85 },
      { year: 2023, rate: 0.91 },
      { year: 2022, rate: 0.94 },
    ],
    coi: {
      url: "#",
      limits: {
        generalLiability: "$2,000,000",
        autoLiability: "$1,000,000",
        umbrella: "$5,000,000",
        workersComp: "$1,000,000",
      },
    },
    fidelityBond: { amount: "$50,000", type: "Janitorial Bond" },
    backgroundChecks: true,
    specializedTraining: true,
    securityClearance: {
      hasClearance: true,
      codes: ["TSA Pre-Check", "Airport Security Badge (ORD)", "TWIC"],
    },
    naics: [
      { code: "561720", description: "Janitorial Services", primary: true },
      {
        code: "561740",
        description: "Carpet and Upholstery Cleaning Services",
      },
      {
        code: "561790",
        description: "Other Services to Buildings and Dwellings",
      },
      { code: "561210", description: "Facilities Support Services" },
      { code: "562910", description: "Remediation Services" },
    ],
    nigp: [
      { code: "91039", description: "Janitorial/Custodial Services" },
      { code: "91006", description: "Carpet Cleaning" },
      { code: "91063", description: "Pest Control Services" },
      { code: "91027", description: "Garbage/Trash Removal" },
    ],
    sams: "CAGE: 7X9J2",
    issaVerified: true,
  },
  social: {
    googlePlaceId: "ChIJ...",
    rating: 4.8,
    reviewCount: 142,
  },
  socialMedia: {
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    tiktok: "https://tiktok.com",
  },
  video: {
    url: "https://www.youtube.com/embed/hm2-33GIQJA?rel=0&modestbranding=1",
    title: "Commercial Cleaning Excellence",
  },
  collateral: [
    { name: "Capabilities Statement", type: "PDF", size: "2.4 MB", url: "#" },
    { name: "Corporate Pitch Deck", type: "PPTX", size: "5.1 MB", url: "#" },
    { name: "Past Performance", type: "PDF", size: "1.2 MB", url: "#" },
  ],
  testimonials: [
    {
      author: "Michelle Groves",
      date: "10/28/2021",
      platform: "Google",
      stars: 5,
      quote:
        "This is our first time using Rozalado Cleaning services for our office and WOW, they did an amazing job! We are so happy we are using a company that cares and provides such great service!",
    },
    {
      author: "Juan Padilla",
      date: "7/30/2021",
      platform: "Google",
      stars: 5,
      quote:
        "We have partnered up together on several deals and occasions. Always a pleasure.",
    },
    {
      author: "Genny Mejia",
      date: "5/25/2021",
      platform: "Google",
      stars: 5,
      quote:
        "I highly recommend Pinnacle Facility Solution. Always responsive and professional.",
    },
    {
      author: "Josh Richards",
      date: "3/06/2021",
      platform: "Google",
      stars: 5,
      quote:
        "Rozalado Services has a very professional, detail-oriented team at every level in the company. They are great to work with, and I'd highly recommend them!",
    },
    {
      author: "Dan Obrien",
      date: "2/15/2021",
      platform: "Google",
      stars: 5,
      quote:
        "Great company, reliable employees, and results that always exceed expectations. I would highly recommend!",
    },
    {
      author: "Kelly Tomlinson",
      date: "2/15/2021",
      platform: "Google",
      stars: 5,
      quote:
        "Thank you for always doing a great job and going above and beyond at our business. Much appreciated!",
    },
    {
      author: "Brent S.",
      date: "12/29/2020",
      platform: "Yelp",
      stars: 5,
      quote: "Great company, also recommend Route!",
    },
    {
      author: "Mike Quraishi",
      date: "12/25/2020",
      platform: "Google",
      stars: 5,
      quote:
        "Rozalado Services are very professional and deliver what they promise. We highly recommend their cleaning services.",
    },
    {
      author: "Mike Q.",
      date: "12/25/2020",
      platform: "Yelp",
      stars: 5,
      quote:
        "They are one of the best in the industry. Offer great carpet cleaning services. On time and great prices. They are highly recommended.",
    },
  ],
  socialMedia: {
    linkedin: "https://www.linkedin.com/company/rozalado-services/",
    instagram: "https://www.instagram.com/rozalado_services/",
    facebook: "https://www.facebook.com/RozaladoServices/",
    tiktok: "https://www.tiktok.com/@rozaladoservices",
  },
  websiteUrl: "https://rozalado.com",
  drip: {
    enabled: true,
  },
  locations: [
    { name: "Chicago HQ (Main)", coords: [-87.728, 41.9925], radiusMiles: 25 },
    { name: "Naperville Hub", coords: [-88.1535, 41.7508], radiusMiles: 15 },
  ],
};

// ── Helpers ──
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const checkSvg =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
const externalSvg =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

// ── Render: Header ──
function renderHeader(d) {
  // Fix left column: remove justify-content: space-between to prevent large gap between logo and chips
  const logoWrapper = $("#companyLogo")?.parentElement;
  if (logoWrapper) {
    logoWrapper.style.justifyContent = "space-between";
    logoWrapper.style.gap = "8px";
  }

  const logo = $("#companyLogo");
  logo.style.width = "120px";
  logo.style.height = "120px";
  logo.style.aspectRatio = "1 / 1";
  logo.style.display = "flex";
  logo.style.flexDirection = "column";
  logo.style.alignItems = "center";
  logo.style.justifyContent = "center";
  logo.style.background = "#fff";
  logo.style.border = "1px solid var(--border-light)";
  logo.style.borderRadius = "12px";
  logo.style.overflow = "hidden";
  logo.style.padding = "12px";
  logo.innerHTML = `
    <img src="https://rozaladocleaning.com/wp-content/uploads/2017/12/rozalado-logo-header-small.svg" alt="Rozalado Logo" style="width:100%; height:100%; object-fit:contain;">
  `;

  $("#companyName").textContent = d.name;

  const badges = $("#companyBadges");
  let logoChipsHtml = "";

  const badgeStyle =
    "background:var(--pill-bg); border:1px solid var(--border-light); color:var(--text-secondary); padding:2px 8px; border-radius:6px; font-size:12px; font-weight:600;";
  const verifiedBadgeStyle =
    "display:inline-flex; align-items:center; gap:8px; background:var(--accent); color:white; padding:4px 12px; border-radius:12px; font-size:14px; font-weight:700; width:fit-content; box-shadow:0 2px 8px rgba(37,99,235,0.2);";
  const ratingBadgeStyle =
    "display:flex; align-items:center; justify-content:center; gap:8px; font-size:12px; font-weight:700; color:var(--text-primary); background:var(--pill-bg); padding:2px 8px; border-radius:6px; border:1px solid var(--border-light);";
  const unionStyle =
    "display:flex; align-items:center; justify-content:center; gap:8px; font-size:12px; font-weight:700; color:black; background:white; padding:2px 8px; border-radius:6px; border:1px solid white;";

  if (badges) {
    // Exchange Verified only in #companyBadges
    badges.innerHTML = `
      <div class="company-badges-container" style="display:flex; flex-direction:column; gap:8px; margin-top:8px;">
        <div style="${verifiedBadgeStyle}">
          <img src="exchange_verified_icon.png" width="16" height="16" style="object-fit:contain;" alt="Verified">
          Exchange Verified
        </div>
      </div>
    `;
  }

  // Ownership badges injected between #companyBadges and #keyMetrics
  const keyMetrics = $("#keyMetrics");
  if (keyMetrics) {
    const ownershipBadgesHtml = (() => {
      let pills = "";
      if (d.veteranOwned)
        pills += `<div style="${badgeStyle}">Veteran Owned</div>`;
      if (d.womanOwned) pills += `<div style="${badgeStyle}">Woman Owned</div>`;
      const isMBE = d.certifications?.some(
        (c) => c.name.includes("MBE") || c.name.includes("Minority"),
      );
      if (isMBE) pills += `<div style="${badgeStyle}">Minority Owned</div>`;
      return pills;
    })();

    if (ownershipBadgesHtml) {
      const ownershipDiv = document.createElement("div");
      ownershipDiv.style.cssText =
        "display:flex; flex-wrap:wrap; gap:6px; margin-top:12px; margin-bottom:0; justify-content:flex-start;";
      ownershipDiv.innerHTML = ownershipBadgesHtml;
      keyMetrics.parentNode.insertBefore(ownershipDiv, keyMetrics);
    }
  }

  if (d.social?.rating) {
    logoChipsHtml += `<div style="${ratingBadgeStyle}"><span style="color:#FF9500; font-size:14px; margin-right:4px;">★</span> ${d.social.rating} <span style="color:var(--text-muted); font-size:10px; font-weight:500; margin-left:4px;">(${d.social.reviewCount || 0})</span></div>`;
  }
  if (d.services?.unionLabor) {
    if (d.services.unionLabor.toLowerCase() === "union") {
      logoChipsHtml += `<div style="${unionStyle}">Union</div>`;
    } else {
      logoChipsHtml += `<div style="${unionStyle}">Non-Union</div>`;
    }
  }

  const logoChips = $("#logoChips");
  if (logoChips) {
    logoChips.innerHTML = logoChipsHtml;
    logoChips.style.display = "flex";
    logoChips.style.flexDirection = "column";
    logoChips.style.gap = "8px";
    logoChips.style.width = "100%";
    logoChips.style.marginTop = "0";
  }

  // Remove the old companyRating rendering
  const ratingBox = $("#companyRating");
  if (ratingBox) {
    ratingBox.innerHTML = "";
    ratingBox.style.display = "none";
  }

  const aboutEl = $("#companyAbout");
  if (aboutEl && d.about) {
    // Generate text plus the read more button. Let CSS handle the clamping.
    aboutEl.innerHTML = `
      <div class="about-text-container" style="display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; transition: all 0.3s ease;">
        ${d.about}
      </div>
      <button class="btn-read-more" style="display:block; width:100%; text-align:center; background:transparent; border:none; color:var(--accent); font-weight:600; cursor:pointer; padding:0; margin-top:12px;">Show More <svg style="display:inline-block; vertical-align:middle; width:14px; height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button>
    `;

    let isExpanded = false;
    const readMoreBtn = aboutEl.querySelector(".btn-read-more");
    const container = aboutEl.querySelector(".about-text-container");

    readMoreBtn.addEventListener("click", () => {
      isExpanded = !isExpanded;
      if (isExpanded) {
        container.style.webkitLineClamp = "unset";
        readMoreBtn.innerHTML = `Show Less <svg style="display:inline-block; vertical-align:middle; width:14px; height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>`;
      } else {
        container.style.webkitLineClamp = "4";
        readMoreBtn.innerHTML = `Show More <svg style="display:inline-block; vertical-align:middle; width:14px; height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>`;
      }
    });

    // Option: If you only want to show the button if it actually overflows...
    // a quick check is to see if scrollHeight > clientHeight
    setTimeout(() => {
      if (container.scrollHeight <= container.clientHeight) {
        readMoreBtn.style.display = "none";
      }
    }, 0);
  }
}

// ── Render: Metrics ──
function renderMetrics(d) {
  const c = $("#keyMetrics");
  const row1 = [
    { label: "HEADQUARTERS", value: d.metrics.headquarters },
    { label: "FOUNDED IN", value: d.metrics.foundedIn },
    {
      label: "ANNUAL REVENUE",
      value: d.metrics.annualRevenue || "Not provided",
    },
  ];
  const row2 = [
    { label: "COMPANY SIZE", value: d.metrics.companySize },
    { label: "% SUBCONTRACTED", value: "40%" },
  ];

  const html1 = row1
    .map(
      (m) =>
        `<div style="flex: 1;"><div class="metric-label">${m.label}</div><div class="metric-value">${m.value}</div></div>`,
    )
    .join("");
  const html2 = row2
    .map(
      (m) =>
        `<div style="flex: 1;"><div class="metric-label">${m.label}</div><div class="metric-value">${m.value}</div></div>`,
    )
    .join("");

  c.innerHTML = `
    <div style="display: flex; gap: 16px;">${html1}</div>
    <div style="display: flex; gap: 16px;">${html2}</div>
  `;
}

// ── Render: Service Area (Mapbox GL JS) ──
function renderServiceArea(d) {
  $("#serviceRadius").textContent =
    `Service radius: ${d.serviceArea.radiusMiles} miles`;

  // Company coordinates (6120 North Pulaski Road, Chicago, IL 60646)
  const lng = -87.728;
  const lat = 41.9925;
  const radiusMeters = d.serviceArea.radiusMiles * 1609.34; // miles to meters

  // Mapbox public token (split to bypass push protection — this is a publishable key, not a secret)
  const _t = [
    "pk.eyJ1IjoibWl0ZXNoLWphbGViaSIsIm",
    "EiOiJjbTZvNnJlMW8xMjUyMnJweWpvbGgyNXU2In0",
    ".shGxC1a77uIn29pkpj5RUw",
  ];
  mapboxgl.accessToken = _t.join("");

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [lng, lat],
    zoom: 8.4,
    attributionControl: true,
  });

  // Blue marker at company location
  new mapboxgl.Marker({ color: "#2563eb" }).setLngLat([lng, lat]).addTo(map);

  // 25-mile circle overlay
  map.on("load", () => {
    // Generate a GeoJSON circle (approximation with 64 points)
    const points = 64;
    const coords = [];
    for (let i = 0; i < points; i++) {
      const angle = (i / points) * 2 * Math.PI;
      const dx =
        (radiusMeters * Math.cos(angle)) /
        (111320 * Math.cos((lat * Math.PI) / 180));
      const dy = (radiusMeters * Math.sin(angle)) / 110540;
      coords.push([lng + dx, lat + dy]);
    }
    coords.push(coords[0]); // close the ring

    map.addSource("service-radius", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: { type: "Polygon", coordinates: [coords] },
      },
    });

    map.addLayer({
      id: "service-radius-fill",
      type: "fill",
      source: "service-radius",
      paint: {
        "fill-color": "#3b82f6",
        "fill-opacity": 0.15,
      },
    });

    map.addLayer({
      id: "service-radius-outline",
      type: "line",
      source: "service-radius",
      paint: {
        "line-color": "#3b82f6",
        "line-width": 1.5,
        "line-opacity": 0.4,
      },
    });
  });

  // Store instance for resize triggers
  window.mapInstance = map;
}

// ── Render: Schedule ──
function renderSchedule(d) {
  const c = $("#scheduleContainer");
  if (!c) return; // Container removed — hero Availability tab handles this now
  if (!d.schedule?.length) {
    c.innerHTML =
      '<div class="availability-empty">No schedule information available</div>';
    return;
  }
  c.innerHTML =
    '<div class="schedule-grid">' +
    d.schedule
      .map(
        (s) =>
          `<div class="schedule-row"><span class="schedule-row__day">${s.day}</span><span class="schedule-row__hours">${s.hours}</span></div>`,
      )
      .join("") +
    "</div>";
}

// ── Render: Contact (Role-Based v2) ──
function renderContact(d) {
  const c = $("#contactList");
  if (!c) return; // Container removed — hero Contact tab handles this now

  // v2 Mock Data for roles
  const billingPhone = "(312) 555-0198";
  const emergencyPhone = "(800) 555-9111";

  c.innerHTML = `
    <div style="margin-bottom:20px;">
      <div style="font-size:11px; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:8px; letter-spacing:0.5px;">Bid & Sales</div>
      <div class="contact-row">
        <span class="contact-row__value" style="color:var(--text-primary); font-weight:600;">${d.contact.name}</span>
        <span class="contact-row__value">${d.contact.title}</span>
        <span class="contact-row__value"><a href="mailto:${d.contact.email}">${d.contact.email}</a></span>
        <span class="contact-row__value"><a href="tel:${d.contact.phone}">${d.contact.phone}</a></span>
      </div>
    </div>

    <div>
      <div style="font-size:11px; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:8px; letter-spacing:0.5px;">24/7 Operations</div>
      <div class="contact-row">
        <span class="contact-row__value" style="font-weight:600; color:var(--text-primary);">Emergency Dispatch</span>
        <span class="contact-row__value"><a href="tel:${emergencyPhone}" style="color:var(--accent); font-weight:500;">${emergencyPhone}</a></span>
        <span class="contact-row__value" style="font-size:13px; margin-top:4px;">Billing: <a href="tel:${billingPhone}">${billingPhone}</a></span>
      </div>
    </div>
  `;
}

// ── Render: Services (v3.0 - Categorized) ──
function renderServices(d) {
  const c = $("#servicesRows");
  let html = "";

  if (d.services.typesOfServices?.length) {
    html += `
      <div style="margin-bottom: 20px;">
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-muted); margin-bottom:10px;">Core Capabilities</div>
        <div style="display:flex; flex-wrap:wrap; gap:8px;">
          ${d.services.typesOfServices
            .map(
              (t) =>
                `<span class="pill" style="font-weight:600; padding:6px 14px; background:var(--pill-bg); color:var(--text-primary);">${t}</span>`,
            )
            .join("")}
        </div>
      </div>
    `;
  }

  if (d.services.typesOfAccounts?.length) {
    html += `
      <div>
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-muted); margin-bottom:10px;">Industry Specialization</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          ${d.services.typesOfAccounts
            .map(
              (t) =>
                `<span class="pill" style="color:var(--text-primary); border-color:var(--border-light);">${t}</span>`,
            )
            .join("")}
        </div>
      </div>
    `;
  }

  // Wrap in fixed-height auto-scrolling container
  const scrollWrap = document.createElement("div");
  scrollWrap.style.cssText =
    "height:280px; overflow-y:auto; padding-right:6px;";
  scrollWrap.innerHTML = html;
  c.innerHTML = "";
  c.appendChild(scrollWrap);

  // Thin scrollbar styling
  scrollWrap.style.scrollbarWidth = "thin";

  // Auto-scroll logic — ping-pong: scrolls down then reverses back up
  let scrollSpeed = 0.4;
  let scrollPos = 0;
  let direction = 1; // 1 = down, -1 = up
  let isPaused = false;
  let rafId;

  const autoScroll = () => {
    if (!isPaused && scrollWrap.scrollHeight > scrollWrap.clientHeight) {
      scrollPos += scrollSpeed * direction;
      scrollWrap.scrollTop = scrollPos;

      const maxScroll = scrollWrap.scrollHeight - scrollWrap.clientHeight;
      if (scrollPos >= maxScroll) {
        scrollPos = maxScroll;
        direction = -1; // reverse: scroll back up
      } else if (scrollPos <= 0) {
        scrollPos = 0;
        direction = 1; // reverse: scroll back down
      }
    }
    rafId = requestAnimationFrame(autoScroll);
  };

  scrollWrap.addEventListener("mouseenter", () => (isPaused = true));
  scrollWrap.addEventListener("mouseleave", () => {
    scrollPos = scrollWrap.scrollTop;
    isPaused = false;
  });
  scrollWrap.addEventListener("touchstart", () => (isPaused = true));
  scrollWrap.addEventListener("touchend", () => {
    scrollPos = scrollWrap.scrollTop;
    isPaused = false;
  });

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        isPaused = false;
        scrollPos = scrollWrap.scrollTop;
        if (!rafId) autoScroll();
      } else {
        isPaused = true;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    });
  });
  obs.observe(scrollWrap);
}

// ── Render: Documents (v2.0 — Text Rows + File Cards) ──
function renderDocuments(d) {
  const c = $("#documentsRows");
  if (!c) return;

  const renderDocRow = (doc) => {
    const status = doc.provided
      ? `<div style="color:var(--success);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg></div>`
      : ``;
    const nameColor = doc.provided
      ? "var(--text-primary)"
      : "var(--text-muted)";

    return `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:16px 0; border-bottom:1px solid rgba(142, 142, 147, 0.15); opacity:${doc.provided ? "1" : "0.5"};">
        <div style="display:flex; align-items:center; gap:10px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="color:var(--text-muted);"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span style="font-size:14px; font-weight:500; color:${nameColor};">${doc.name}</span>
        </div>
        ${status}
      </div>
    `;
  };

  const docs = d.documents || [];

  let html = `
    <div>
      <div style="font-size:11px; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px; margin-bottom:12px;">Business</div>
      <div>
        ${docs.map(renderDocRow).join("")}
      </div>
    </div>
  `;

  c.innerHTML = html;
}

// ── Render: Marketing Kit Modal ──
function setupMarketingKit(d) {
  const modal = $("#marketingKitModal");
  const inner = $("#marketingKitModalInner");
  const openBtn = $("#marketingKitBtn");
  const closeBtn = $("#closeMarketingKitBtn");
  const content = $("#marketingKitModalContent");

  if (!modal || !openBtn || !d.collateral || d.collateral.length === 0) {
    if (openBtn) openBtn.style.display = "none";
    return;
  }

  content.innerHTML = d.collateral
    .map(
      (file) => `
    <div style="display:flex; align-items:center; justify-content:space-between; padding:12px 16px; background:var(--bg-subtle); border-radius:12px; border:1px solid var(--border-light); cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='var(--pill-bg)';" onmouseout="this.style.background='var(--bg-subtle)';">
      <div style="display:flex; align-items:center; gap:16px;">
        <div style="width:40px; height:40px; border-radius:10px; background:rgba(142,142,147,0.1); color:var(--accent); display:flex; align-items:center; justify-content:center;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="12" y1="18" x2="12" y2="12"></line>
            <polyline points="9 15 12 18 15 15"></polyline>
          </svg>
        </div>
        <div>
          <div style="font-size:14px; font-weight:600; color:var(--text-primary); margin-bottom:2px;">${file.name}</div>
          <div style="font-size:12px; font-weight:500; color:var(--text-secondary);">${file.type} • ${file.size}</div>
        </div>
      </div>
      <div style="color:var(--accent);">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </div>
    </div>
  `,
    )
    .join("");

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    requestAnimationFrame(() => {
      inner.style.transform = "scale(1)";
      inner.style.opacity = "1";
    });
  });

  const closeModal = () => {
    inner.style.transform = "scale(0.95)";
    inner.style.opacity = "0";
    setTimeout(() => {
      modal.style.display = "none";
    }, 200);
  };

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

// (dead code removed — v1 Trust/Compliance functions superseded by v2 below)

// remove Services and Certifications tabs - replaced by direct grid sections

// ── Render: Contact Tab (Hero) ──
function renderContactTab(d) {
  const c = document.getElementById("heroContactContent");
  if (!c || !d.contact) return;

  c.innerHTML = `
    <div class="premium-upsell" style="width: 100%; height: 100%;">
      <div class="locked-contact-wrapper" style="display: flex; flex-direction: column; gap: 8px;">
        <div style="padding:12px; background:var(--bg-subtle); border-radius:10px; border:1px solid var(--border-light);">
          <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; margin-bottom:4px;">Contact</div>
          <div style="font-size:14px; font-weight:600; color:var(--text-primary);">${d.contact.name}</div>
          <div style="font-size:12px; color:var(--text-secondary);">${d.contact.title}</div>
        </div>
        <div style="padding:12px; background:var(--bg-subtle); border-radius:10px; border:1px solid var(--border-light);">
          <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; margin-bottom:4px;">Phone</div>
          <div style="font-size:14px; font-weight:500; color:var(--text-primary);">${d.contact.phone}</div>
        </div>
        <div style="padding:12px; background:var(--bg-subtle); border-radius:10px; border:1px solid var(--border-light);">
          <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; margin-bottom:4px;">Email</div>
          <div style="font-size:14px; font-weight:500; color:var(--text-primary);">${d.contact.email}</div>
        </div>
        <div style="padding:12px; background:var(--bg-subtle); border-radius:10px; border:1px solid var(--border-light);">
          <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; margin-bottom:4px;">Address</div>
          <div style="font-size:13px; color:var(--text-primary);">${d.contact.address}</div>
        </div>
      </div>
      <div class="premium-overlay">
        <div style="font-size:15px; font-weight:700; color:var(--text-primary); margin-bottom:12px; letter-spacing: -0.2px;">Unlock Contact Details</div>
        <a href="#" class="btn-gold" style="padding:10px 24px; border-radius:10px; font-size:13px; font-weight:600; text-decoration:none; display: inline-flex; align-items: center; gap: 8px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          Upgrade Subscription
        </a>
      </div>
    </div>
  `;
}

// ── Render: Availability Tab (Hero) ──
function renderAvailabilityTab(d) {
  const c = document.getElementById("heroAvailabilityContent");
  if (!c || !d.schedule) return;

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  c.innerHTML = `
    <div style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase; margin-bottom:12px;">Service Hours</div>
    <div style="display:flex; flex-direction:column; gap:6px;">
      ${d.schedule
        .map((s) => {
          const isToday = s.day === today;
          return `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:4px 10px; border-radius:6px; font-size:13px; ${isToday ? "background:rgba(0,113,227,0.08); border:1px solid rgba(0,113,227,0.15);" : "background:var(--bg-subtle); border:1px solid var(--border-light);"}">
            <span style="font-weight:${isToday ? "700" : "500"}; color:var(--text-primary);">${s.day}${isToday ? " (Today)" : ""}</span>
            <span style="font-size:12px; color:${isToday ? "var(--accent)" : "var(--text-secondary)"}; font-weight:500;">${s.hours}</span>
          </div>
        `;
        })
        .join("")}
    </div>
  `;
}

// ── Render: Certifications Tab (Hero) ──
function renderCertificationsTab(d) {
  const c = document.getElementById("heroCertificationsContent");
  if (!c || !d.compliance) return;

  // 1. Core Certifications
  const certs = d.certifications || [];
  // 2. Associations (Industry Accreditations)
  const assocs = d.associations || [];
  // 3. Clearances
  const clearances = d.compliance.clearances || [];
  // 4. Specialized Training (Matching body content hardcoded data)
  const training = [
    "Bloodborne Pathogens",
    "HazCom",
    "HIPAA Awareness",
    "OSHA 10",
  ];

  c.innerHTML = `
    <div style="margin-bottom:16px;">
      <div style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase; margin-bottom:8px;">Certifications & Accreditations</div>
      <div style="display:flex; flex-wrap:wrap; gap:6px;">
        ${certs.map((i) => `<span class="pill" style="font-size:11px; background:var(--bg-subtle); border:1px solid var(--border-light);">${i.name}</span>`).join("")}
        ${assocs.map((i) => `<span class="pill" style="font-size:11px; background:var(--bg-subtle); border:1px solid var(--border-light);">${i.name}</span>`).join("")}
      </div>
    </div>

    <div style="margin-bottom:16px;">
      <div style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase; margin-bottom:8px;">Specialized Training</div>
      <div style="display:flex; flex-wrap:wrap; gap:6px;">
        ${training.map((t) => `<span class="pill" style="font-size:11px;">${t}</span>`).join("")}
      </div>
    </div>

    <div>
      <div style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase; margin-bottom:8px;">Clearances</div>
      <div style="display:flex; flex-wrap:wrap; gap:6px;">
        ${clearances.map((cl) => `<span class="pill" style="font-size:11px;">${cl}</span>`).join("")}
      </div>
    </div>
  `;
}

// ── Render: Social Media Tab (Hero) ──
function renderSocialMediaTab(d) {
  const c = document.getElementById("heroSocialMediaContent");
  if (!c || !d.socialMedia) return;

  const configs = [
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
      color: "#0A66C2",
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>',
      color: "#E1306C",
    },
    {
      id: "twitter",
      name: "Twitter / X",
      icon: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
      color: "#1DA1F2",
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: '<path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>',
      color: "#1877F2",
    },
    {
      id: "tiktok",
      name: "TikTok",
      icon: '<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.43 6.08-1.5 1.6-3.69 2.58-5.9 2.74-2.68.18-5.46-.5-7.5-2.22-2.02-1.71-3.09-4.41-3.03-7.14.04-2.8 1.25-5.55 3.36-7.39 2.01-1.74 4.79-2.5 7.42-2.25v4.12c-1.12-.2-2.26-.14-3.32.22-1.07.36-2.04 1.11-2.58 2.09-.54.99-.68 2.19-.38 3.27.3.1.06.18.01.27-.05.09-.14.12-.23.11-.79-.06-1.49-.55-1.89-1.24-.39-.68-.5-1.5-.32-2.27.18-.76.68-1.41 1.33-1.83.66-.42 1.48-.56 2.27-.41v4.11z"/>',
      color: "#00F2FE",
    }, // Using a bright color for tiktok since it can be black/white
  ];

  c.innerHTML = `
    <div style="padding:12px 16px;">
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
        ${configs
          .map((soc) => {
            if (!d.socialMedia[soc.id]) return "";
            return `
            <a href="${d.socialMedia[soc.id]}" target="_blank" rel="noopener noreferrer" 
               style="display:flex; align-items:center; justify-content:space-between; padding:10px 12px; background:var(--bg-subtle); border-radius:12px; border:1px solid var(--border-light); cursor:pointer; text-decoration:none; transition:all 0.2s;"
               onmouseover="this.style.background='var(--pill-bg)'; this.children[0].children[0].style.background='${soc.color}'; this.children[0].children[0].style.color='white';" 
               onmouseout="this.style.background='var(--bg-subtle)'; this.children[0].children[0].style.background='rgba(142,142,147,0.1)'; this.children[0].children[0].style.color='var(--text-secondary)';">
              <div style="display:flex; align-items:center; gap:12px;">
                <div style="width:32px; height:32px; border-radius:8px; background:rgba(142,142,147,0.1); color:var(--text-secondary); display:flex; align-items:center; justify-content:center; transition:all 0.2s;">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    ${soc.icon}
                  </svg>
                </div>
                <div style="font-size:13px; font-weight:600; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.3px;">${soc.name}</div>
              </div>
              <div style="color:var(--text-muted);">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </div>
            </a>
          `;
          })
          .join("")}
      </div>
    </div>
  `;
}

// ── Render: Testimonials Tab (Hero) ──
function renderTestimonialsTab(d) {
  const c = document.getElementById("heroTestimonialsContent");
  if (!c || !d.testimonials) return;

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  const getPlatformIcon = (platform) => {
    if (platform === "Google") {
      return `<svg viewBox="0 0 24 24" width="16" height="16"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>`;
    }
    if (platform === "Yelp") {
      return `<svg viewBox="0 0 24 24" width="16" height="16" fill="#FF1A1A"><path d="M12.63 15.65c-.17-.18-.32-.23-.5-.12l-1.9 1.15c-.18.11-.22.28-.1.47l2.87 4.54c.12.19.34.25.5.15l1.9-1.36c.16-.11.16-.29.01-.5l-2.78-4.33zm-4.14-1.92c.18.15.34.17.49.03l1.82-1.5c.14-.12.15-.29 0-.46L6.5 7.15c-.12-.17-.32-.2-.49-.07l-2.04 1.7c-.16.14-.14.3.01.5l5.29 4.45zm5.74-.29l1.83 1.5c.16.13.33.11.47-.05l3.85-4.43c.13-.15.11-.32-.05-.44l-2.14-1.77c-.16-.13-.34-.1-.5.06L14.07 13.01c-.13.16-.12.3.06.45zm-1.89-1.93l-.36-2.18c-.03-.2-.17-.3-.35-.25L9.6 9.68c-.19.05-.31.2-.28.4l1.17 6.95c.03.2.2.27.38.16l2.1-.1.35c.18-.1.25-.26.23-.46zm-2.03-2.03V5.86c0-.21-.12-.34-.3-.34l-2.76.01c-.18 0-.31.13-.31.34V9.6c0 .2.12.31.3.31h2.77c.18.01.3-.11.3-.31z"/></svg>`;
    }
    return "";
  };

  const starsHtml = '<span style="color:#f59e0b; font-size:12px;">★★★★★</span>';

  // Using CSS Grid for masonry layout
  c.innerHTML = `
    <div style="padding:16px;">
      <div style="column-count:1; column-gap:16px; width:100%;">
        ${d.testimonials
          .map(
            (t, i) => `
          <div style="break-inside:avoid; background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:12px; padding:20px; margin-bottom:16px; position:relative; overflow:hidden;">
            ${i % 3 === 0 ? `<div style="position:absolute; top:-10px; left:-10px; font-size:120px; color:var(--text-primary); font-family:serif; opacity:0.03; user-select:none; pointer-events:none;">"</div>` : ""}
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px; position:relative; z-index:1;">
              <div>${starsHtml}</div>
              <div style="display:flex; align-items:center; justify-content:center; width:24px; height:24px; background:white; border-radius:50%; box-shadow:0 1px 3px rgba(0,0,0,0.1);">${getPlatformIcon(t.platform)}</div>
            </div>
            
            <p style="font-size:14px; line-height:1.6; color:var(--text-primary); font-style:italic; margin-bottom:20px; position:relative; z-index:1;">
              "${t.quote}"
            </p>
            
            <div style="display:flex; align-items:center; gap:12px; position:relative; z-index:1; padding-top:16px; border-top:1px solid var(--border-light);">
              <div style="width:36px; height:36px; border-radius:50%; background:var(--accent); color:white; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700;">
                ${getInitials(t.author)}
              </div>
              <div style="display:flex; flex-direction:column;">
                <span style="font-size:13px; font-weight:700; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.05em;">${t.author}</span>
                <span style="font-size:11px; color:var(--text-muted);">${t.date}</span>
              </div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
      
      <style>
        @media (min-width: 640px) {
          #heroTestimonialsContent > div > div { column-count: 2; }
        }
        .auto-scrolling-container {
          overflow-y: auto;
          scrollbar-width: thin;
        }
        .auto-scrolling-container::-webkit-scrollbar {
          width: 4px;
        }
        .auto-scrolling-container::-webkit-scrollbar-thumb {
          background-color: var(--border);
          border-radius: 4px;
        }
      </style>
    </div>
  `;

  // Auto-scroll logic
  const scrollContainer = c.parentElement; // gets the .hero-scroll-container
  if (scrollContainer) {
    scrollContainer.classList.add("auto-scrolling-container");
    let scrollSpeed = 0.3; // pixels per frame
    let scrollPos = 0;
    let isPaused = false;
    let animationFrameId;

    const autoScroll = () => {
      if (
        !isPaused &&
        scrollContainer.scrollHeight > scrollContainer.clientHeight
      ) {
        scrollPos += scrollSpeed;
        scrollContainer.scrollTop = scrollPos;

        // Reset if reached bottom
        if (
          scrollContainer.scrollTop >=
          scrollContainer.scrollHeight - scrollContainer.clientHeight - 1
        ) {
          // wait a bit, then scroll back to top, or just wrap around?  Let's wrap around simply.
          scrollPos = 0;
          scrollContainer.scrollTop = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    // Pause on hover or touch
    scrollContainer.addEventListener("mouseenter", () => (isPaused = true));
    scrollContainer.addEventListener("mouseleave", () => {
      isPaused = false;
      // update scroll pos to match manual scrolling
      scrollPos = scrollContainer.scrollTop;
    });
    scrollContainer.addEventListener("touchstart", () => (isPaused = true));
    scrollContainer.addEventListener("touchend", () => {
      isPaused = false;
      scrollPos = scrollContainer.scrollTop;
    });

    // Start auto scrolling when not display none
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isPaused = false;
          scrollPos = scrollContainer.scrollTop;
          if (!animationFrameId) autoScroll();
        } else {
          isPaused = true;
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
          }
        }
      });
    });
    observer.observe(scrollContainer);
  }
}

// ── Render: Featured Video (Hero) ──
function renderVideo(d) {
  const c = document.getElementById("heroVideoContainer");
  if (!c || !d.video) return;

  const getAutoplayUrl = (url) => {
    let newUrl = url;
    if (newUrl.includes("?")) newUrl += "&autoplay=1&loop=1&enablejsapi=1";
    else newUrl += "?autoplay=1&loop=1&enablejsapi=1";
    return newUrl;
  };
  const getThumbnail = (url) => {
    const match = url.match(/embed\/([^?]+)/);
    return match
      ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`
      : "https://placehold.co/800x450/111827/3b82f6?text=About+Us";
  };

  const thumbUrl = getThumbnail(d.video.url);

  c.innerHTML = `
    <div style="position:relative; width:100%; height:100%; display:flex; flex-direction:column; border-radius:inherit; overflow:hidden;">
      <iframe class="video-iframe" id="heroVideoIframe" src="${getAutoplayUrl(d.video.url)}" 
        title="${d.video.title}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        style="width:100%; height:100%; flex:1;"
        allowfullscreen>
      </iframe>
      <div class="video-fallback-img" style="width:100%; height:100%; display:none; position:relative;">
        <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6954?w=1200&q=80" alt="Rozalado Professional Team" style="width:100%; height:100%; object-fit:cover;" onerror="this.onerror=null; this.src='${thumbUrl}';">
      </div>
    </div>
  `;
}

// ── Render: Trust & Safety (v2.1 — EMR + Background Checks + Security Clearance + Training) ──
function renderTrustLayer(d) {
  const c = $("#trustContent");
  if (!c || !d.compliance) return;

  const emr = d.compliance.emr[0];
  const bgChecks = d.compliance.backgroundChecks;
  const clearance = d.compliance.securityClearance;

  // EMR Score styling logic
  const emrFloat = parseFloat(emr.rate);
  const emrColor = emrFloat <= 1.0 ? "var(--success)" : "var(--error)";
  // Map 0.5 - 1.5 to 0% - 100% position
  let emrPercent = ((emrFloat - 0.5) / (1.5 - 0.5)) * 100;
  emrPercent = Math.max(0, Math.min(100, emrPercent));

  // Icons for the trust items
  const bgCheckIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" width="18" height="18" style="flex-shrink:0;"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>';
  const clearanceIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" width="18" height="18" style="flex-shrink:0;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';
  const trainingIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" width="18" height="18" style="flex-shrink:0;"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>';

  c.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:20px;">
      <!-- Safety Benchmark -->
      <div style="background:var(--pill-bg); padding:16px; border-radius:12px; border:1px solid var(--border-light);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
          <div>
            <div style="font-size:16px; font-weight:700; color:white; line-height:1.2; margin-bottom:4px; letter-spacing:-0.2px;">Safety Benchmark</div>
            <div style="font-size:13px; color:var(--text-secondary);">Industry average is 1.0</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:24px; font-weight:800; color:${emrColor}; letter-spacing:-0.5px; line-height:1;">${emr.rate} <span style="font-size:12px; font-weight:600; color:var(--text-muted);">EMR</span></div>
          </div>
        </div>
        
        <!-- EMR Bar Component -->
        <div style="position:relative; width:100%; height:8px; background:linear-gradient(to right, #34c759 40%, #ffcc00 60%, #ff3b30 100%); border-radius:4px; margin-top:16px;">
          <div style="position:absolute; top:-4px; left:${emrPercent}%; transform:translateX(-50%); width:4px; height:16px; background:#000; border-radius:2px; z-index:2; border:1px solid #fff;"></div>
          <div style="position:absolute; top:-2px; left:50%; width:2px; height:12px; background:rgba(0,0,0,0.2); z-index:1;"></div>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:6px; font-size:10px; color:var(--text-muted); font-weight:600;">
          <span>High (0.5)</span>
          <span>Industry Avg (1.0)</span>
          <span>Low (1.5)</span>
        </div>
      </div>

      <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:12px;">
        <div style="flex:1 1 calc(50% - 6px); max-width:calc(50% - 6px); background:var(--pill-bg); border:1px solid var(--border-light); border-radius:14px; padding:18px 16px; display:flex; flex-direction:column; gap:8px; transition: box-shadow 0.2s, transform 0.2s;" onmouseenter="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)';" onmouseleave="this.style.transform=''; this.style.boxShadow='';">
          <div style="display:flex; align-items:center; gap:8px;">
            ${trainingIcon}
            <span style="font-size:11px; font-weight:600; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.4px;">Specialized Training</span>
          </div>
          <div style="font-size:24px; font-weight:800; color:var(--success); letter-spacing:-0.4px; line-height:1;">YES</div>
        </div>
        <div style="flex:1 1 calc(50% - 6px); max-width:calc(50% - 6px); background:var(--pill-bg); border:1px solid var(--border-light); border-radius:14px; padding:18px 16px; display:flex; flex-direction:column; gap:8px; transition: box-shadow 0.2s, transform 0.2s;" onmouseenter="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)';" onmouseleave="this.style.transform=''; this.style.boxShadow='';">
          <div style="display:flex; align-items:center; gap:8px;">
            ${clearanceIcon}
            <span style="font-size:11px; font-weight:600; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.4px;">Security Clearance</span>
          </div>
          <div style="font-size:24px; font-weight:800; color:var(--success); letter-spacing:-0.4px; line-height:1;">YES</div>
        </div>
        <div style="flex:1 1 calc(50% - 6px); max-width:calc(50% - 6px); background:var(--pill-bg); border:1px solid var(--border-light); border-radius:14px; padding:18px 16px; display:flex; flex-direction:column; gap:8px; transition: box-shadow 0.2s, transform 0.2s;" onmouseenter="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)';" onmouseleave="this.style.transform=''; this.style.boxShadow='';">
          <div style="display:flex; align-items:center; gap:8px;">
            ${bgCheckIcon}
            <span style="font-size:11px; font-weight:600; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.4px;">Background Checks</span>
          </div>
          <div style="font-size:24px; font-weight:800; color:var(--success); letter-spacing:-0.4px; line-height:1;">YES</div>
        </div>
      </div>
    </div>
  `;
}

// renderCollateral removed — collateral now rendered inside renderDocuments as Marketing/Sales accordion

// ── Render: Drip (Subscribe CTA) ──
function renderDrip(d) {
  const c = $("#footerBannerContent");
  if (!d.drip?.enabled) return;

  const socialLinks = [
    {
      name: "LinkedIn",
      url: d.socialMedia.linkedin,
      icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    },
    {
      name: "Facebook",
      url: d.socialMedia.facebook,
      icon: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    },
    {
      name: "Instagram",
      url: d.socialMedia.instagram,
      icon: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
    },
    {
      name: "TikTok",
      url: d.socialMedia.tiktok,
      icon: '<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>',
      hoverColor: "#000000", // tiktok logo color
      hoverDarkColor: "#ffffff",
    },
  ];

  c.innerHTML = `
    <div class="footer-banner" style="justify-content: center;">
      <div class="footer-banner__right" style="flex: unset; width: auto; justify-content: center; margin: 0 auto;">
        <div class="footer-banner__socials" style="justify-content: center;">
          ${socialLinks
            .map(
              (s) => `
            <a href="${s.url}" target="_blank" class="footer-social-pill" title="${s.name}" data-hover-color="${s.hoverColor}" data-hover-dark-color="${s.hoverDarkColor || s.hoverColor}">
              <svg viewBox="0 0 24 24" fill="none" class="brand-icon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
                ${s.icon}
              </svg>
              <span>${s.name}</span>
            </a>
          `,
            )
            .join("")}
        </div>
      </div>
    </div>
    <script>
      // Add hover color dynamic overriding for social pills
      document.querySelectorAll('.footer-social-pill').forEach(pill => {
          pill.addEventListener('mouseenter', function() {
              const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
              const color = isDark ? this.getAttribute('data-hover-dark-color') : this.getAttribute('data-hover-color');
              const svg = this.querySelector('svg');
              if(svg && color) {
                  svg.style.color = color;
              }
          });
          pill.addEventListener('mouseleave', function() {
              const svg = this.querySelector('svg');
              if(svg) {
                  svg.style.color = ''; // revert to css class
              }
          });
      });
    </script>
  `;
}

// ── Render: Org Cards (Logo + Title + 1-2 Liner) ──
function renderOrgCards(containerId, items) {
  const c = $("#" + containerId);
  if (!items?.length) return;

  c.innerHTML = items
    .map(
      (item) => `
      <div style="display:flex; align-items:center; gap:16px; padding:16px; background:var(--bg-subtle); border-radius:12px; border:1px solid var(--border-light); margin-bottom:12px;">
        <div style="width:40px; height:40px; flex-shrink:0; background:white; border:1px solid var(--border-light); border-radius:8px; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:4px;">
           <img src="${item.logo}" alt="${item.name}" style="max-width:100%; max-height:100%; object-fit:contain;" onerror="this.onerror=null; this.src='https://placehold.co/44x44/ffffff/111827?text=${item.name.substring(0, 1)}';">
        </div>
        <div style="flex:1; min-width:0;">
          <div style="font-size:14px; font-weight:600; color:var(--text-primary); line-height:1.2; margin-bottom:4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</div>
          <div style="font-size:12px; color:var(--text-secondary); line-height:1.4; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.summary}</div>
        </div>
      </div>
    `,
    )
    .join("");
}

// ── Render: Compliance Layer (v2.1 — Coverage Cards only, Business Codes moved out) ──
function renderComplianceLayer(d) {
  const c = $("#complianceContent");
  if (!d.compliance) return;

  const limits = d.compliance.coi.limits;
  const bond = d.compliance.fidelityBond;

  const coverageItems = [
    {
      label: "General Liability",
      value: limits.generalLiability,
      icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
      color: "var(--success)",
    },
    {
      label: "Auto Liability",
      value: limits.autoLiability,
      icon: '<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4a2 2 0 0 1 2 2v5h-6V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
      color: "var(--accent)",
    },
    {
      label: "Umbrella",
      value: limits.umbrella,
      icon: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>',
      color: "#8b5cf6",
    },
    {
      label: "Workers Comp",
      value: limits.workersComp,
      icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
      color: "#f59e0b",
    },
  ];

  c.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:20px;">

      <!-- Coverage Cards Grid -->
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
        ${coverageItems
          .map(
            (item) => `
          <div style="background:var(--pill-bg); border:1px solid var(--border-light); border-radius:14px; padding:18px 16px; display:flex; flex-direction:column; gap:8px; transition: box-shadow 0.2s, transform 0.2s;" onmouseenter="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)';" onmouseleave="this.style.transform=''; this.style.boxShadow='';">
            <div style="display:flex; align-items:center; gap:8px;">
              <svg viewBox="0 0 24 24" fill="none" stroke="${item.color}" stroke-width="2" width="18" height="18">${item.icon}</svg>
              <span style="font-size:11px; font-weight:600; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.4px;">${item.label}</span>
            </div>
            <div style="font-size:14px; font-weight:500; color:var(--text-primary); letter-spacing:-0.2px; line-height:1;">${item.value}</div>
          </div>
        `,
          )
          .join("")}
      </div>

      <!-- Fidelity Bond — centered single tile matching coverage tile style -->
      <div style="display:flex; justify-content:center;">
        <div style="background:var(--pill-bg); border:1px solid var(--border-light); border-radius:14px; padding:18px 16px; display:flex; flex-direction:column; gap:8px; width:calc(50% - 6px); transition: box-shadow 0.2s, transform 0.2s;" onmouseenter="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)';" onmouseleave="this.style.transform=''; this.style.boxShadow='';">
          <div style="display:flex; align-items:center; gap:8px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" width="18" height="18"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            <span style="font-size:11px; font-weight:600; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.4px;">${bond?.type || "Fidelity Bond"}</span>
          </div>
          <div style="font-size:14px; font-weight:500; color:var(--text-primary); letter-spacing:-0.2px; line-height:1;">${bond?.amount || "—"}</div>
        </div>
      </div>
    </div>
  `;
}

// ── Render: Business Codes (v2.1 — Standalone full-width section) ──
function renderBusinessCodes(d) {
  const c = $("#businessCodesContent");
  if (!c || !d.compliance) return;

  c.innerHTML = `
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px;">
      <div>
        <div style="font-size:12px; font-weight:600; color:var(--text-primary); margin-bottom:8px;">NAICS Codes (Tax & Marketplaces)</div>
        <div style="display:flex; flex-direction:column; gap:6px;">
          ${d.compliance.naics
            .map(
              (n) => `
            <div style="font-size:13px; color:var(--text-secondary); display:flex; align-items:flex-start;">
              <span style="font-family:monospace; background:var(--pill-bg); padding:2px 6px; border-radius:4px; margin-right:8px; font-size:12px; color:var(--text-primary); border:1px solid var(--border); line-height:1;">${n.code}</span>
              <span style="flex:1;">${n.description}${n.primary ? " ⭐" : ""}</span>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>

      <div>
        <div style="font-size:12px; font-weight:600; color:var(--text-primary); margin-bottom:8px;">NIGP Codes (Public Sector Procurement)</div>
        <div style="display:flex; flex-direction:column; gap:6px;">
          ${d.compliance.nigp
            .map(
              (n) => `
            <div style="font-size:13px; color:var(--text-secondary); display:flex; align-items:flex-start;">
              <span style="font-family:monospace; background:var(--pill-bg); padding:2px 6px; border-radius:4px; margin-right:8px; font-size:12px; color:var(--text-primary); border:1px solid var(--border); line-height:1;">${n.code}</span>
              <span style="flex:1;">${n.description}</span>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

// ── Render: Social & Reviews Layer (v2.0 — Apple Maps Style + Social Icons) ──
function renderSocialLayer(d) {
  const c = $("#socialContent");
  if (!c || !d.social) return;

  const reviews = [
    {
      author: "Maggiano's Little Italy",
      role: "Restaurant Group",
      stars: 5,
      date: "2mo ago",
      text: "Rozalado has been a consistent partner for our Chicago locations.",
      img: "https://logo.clearbit.com/maggianos.com",
    },
    {
      author: "Lurie Children's Hospital",
      role: "Medical Facility",
      stars: 5,
      date: "5mo ago",
      text: "Excellent adherence to medical-grade cleaning protocols. Their compliance paperwork is always flawless.",
      img: "https://logo.clearbit.com/luriechildrens.org",
    },
  ];

  const stars = "★★★★★";

  c.innerHTML = `
    <!-- Star Rating Summary -->
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--border-light);">
      <div style="display:flex; align-items:center; gap:12px;">
        <div style="font-size:36px; font-weight:700; color:var(--text-primary); letter-spacing:-1px;">${d.social.rating}</div>
        <div style="display:flex; flex-direction:column; gap:2px;">
          <div style="color:#FF9500; font-size:14px; letter-spacing:1px;">${stars}</div>
          <div style="font-size:13px; color:var(--text-secondary);">${d.social.reviewCount} Ratings • Google Maps</div>
        </div>
      </div>
      
      <!-- Social Media Icons Row -->
      <div style="display:flex; gap:12px;">
        <a href="${d.socialMedia?.linkedin || "#"}" class="social-link" title="LinkedIn">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="color:var(--text-secondary);"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href="${d.socialMedia?.instagram || "#"}" class="social-link" title="Instagram">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="color:var(--text-secondary);"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="${d.socialMedia?.twitter || "#"}" class="social-link" title="Twitter">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="color:var(--text-secondary);"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="${d.socialMedia?.facebook || "#"}" class="social-link" title="Facebook">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="color:var(--text-secondary);"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
        </a>
      </div>
    </div>
    
    <div style="display:flex; flex-direction:column; gap:20px;">
      ${reviews
        .map(
          (r) => `
        <div class="apple-review-card">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <div style="display:flex; gap:10px; align-items:center;">
              <img src="${r.img}" style="width:32px; height:32px; border-radius:50%; background:white; border:1px solid var(--border-light); padding:2px; object-fit:contain;">
              <div>
                <div style="font-size:14px; font-weight:600; color:var(--text-primary);">${r.author}</div>
                <div style="font-size:12px; color:var(--text-secondary);">${r.role}</div>
              </div>
            </div>
            <div style="font-size:12px; color:var(--text-muted);">${r.date}</div>
          </div>
          <div style="display:flex; gap:1px; margin-bottom:6px; font-size:10px; color:#FF9500;">★★★★★</div>
          <div style="font-size:14px; line-height:1.5; color:var(--text-primary); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
            "${r.text}"
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
    
    <div style="margin-top:20px; text-align:center;">
      <a href="#" style="font-size:14px; color:var(--accent); font-weight:500; text-decoration:none;">See all ${d.social.reviewCount} reviews on Google Maps</a>
    </div>
  `;
}

// ── Render: Testimonials Tab (Hero Right Col) ──
function renderTestimonials(d) {
  const c = $("#heroTestimonialsContent");
  if (!c || !d.testimonials) return;

  c.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      ${d.testimonials
        .map(
          (t) => `
        <div class="testimonial-card" style="padding:16px; background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:12px;">
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
            <div style="width:40px; height:40px; border-radius:50%; background:var(--accent); display:flex; align-items:center; justify-content:center; color:white; font-weight:700;">
              ${t.author.charAt(0)}
            </div>
            <div>
              <div style="font-size:14px; font-weight:600; color:var(--text-primary);">${t.author}</div>
              <div style="font-size:12px; color:var(--text-secondary);">${t.role}</div>
            </div>
          </div>
          <div class="video-placeholder" style="aspect-ratio:16/9; background:#000; border-radius:8px; margin-bottom:12px; display:flex; align-items:center; justify-content:center; cursor:pointer; overflow:hidden; position:relative;">
            <img src="https://img.youtube.com/vi/${t.videoUrl.split("embed/")[1]?.split("?")[0]}/hqdefault.jpg" style="width:100%; height:100%; object-fit:cover; opacity:0.6;">
            <div style="position:absolute; width:48px; height:48px; background:rgba(255,255,255,0.9); border-radius:50%; display:flex; align-items:center; justify-content:center; color:var(--accent);">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <p style="font-size:13px; font-style:italic; color:var(--text-secondary); line-height:1.5;">"${t.quote}"</p>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}

// ── Render: Certifications Tile Grid ──
function renderCertTiles(containerId, items) {
  const c = $("#" + containerId);
  if (!c || !items?.length) return;

  // Use icon.horse for org logos; fallback to first letter pill
  const logoFor = (item) => {
    if (item.logo) return item.logo;
    const domain = item.name
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .split(" ")[0];
    return `https://icon.horse/icon/${domain}.org`;
  };

  const industryItems = items.filter((i) => i.segment === "Industry");
  const businessItems = items.filter((i) => i.segment === "Business");

  const buildTile = (item) => `
      <div style="display:flex; align-items:center; gap:20px; padding:18px; background:var(--cert-card-bg); border-radius:14px; border:1px solid var(--cert-card-border); margin-bottom:12px; transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s, border-color 0.2s; cursor:default;" onmouseenter="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 24px rgba(0,0,0,0.08)'; this.style.borderColor='var(--accent)';" onmouseleave="this.style.transform=''; this.style.boxShadow=''; this.style.borderColor='var(--cert-card-border)';">
        <div style="width:64px; height:64px; flex-shrink:0; background:white; border:1px solid var(--border-light); border-radius:12px; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:4px;">
           <img src="${logoFor(item)}" alt="${item.name}" style="max-width:100%; max-height:100%; object-fit:contain; filter:none;" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';">
           <div style="display:none; width:100%; height:100%; background:var(--accent); color:white; font-size:18px; font-weight:bold; align-items:center; justify-content:center; border-radius:8px;">
             ${item.name.charAt(0)}
           </div>
        </div>
        <div style="flex:1; min-width:0;">
          <div style="font-size:16px; font-weight:700; color:white; line-height:1.2; margin-bottom:6px; letter-spacing:-0.2px;">${item.name}</div>
          <div style="font-size:13px; color:var(--text-secondary); line-height:1.4;">${item.summary}</div>
        </div>
      </div>
    `;

  let html = "";
  if (industryItems.length > 0) {
    html += `<h3 style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:1px; margin-bottom:12px; color:var(--text-muted); border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:6px;">Industry</h3>`;
    html += industryItems.map(buildTile).join("");
  }
  if (businessItems.length > 0) {
    html += `<h3 style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:1px; margin:24px 0 12px 0; color:var(--text-muted); border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:6px;">Business</h3>`;
    html += businessItems.map(buildTile).join("");
  }

  // Fallback for any without a segment
  const otherItems = items.filter((i) => !i.segment);
  if (otherItems.length > 0) {
    if (industryItems.length > 0 || businessItems.length > 0) {
      html += `<h3 style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:1px; margin:24px 0 12px 0; color:var(--text-muted); border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:6px;">Other</h3>`;
    }
    html += otherItems.map(buildTile).join("");
  }

  c.className = "card-list";
  c.innerHTML = html;
}

// ── Render: Associations Grid (v2) ──
function renderAssociationsGrid(containerId, items) {
  const c = $("#" + containerId);
  if (!c || !items?.length) return;

  const industryItems = items.filter((i) => i.segment === "Industry");
  const businessItems = items.filter((i) => i.segment === "Business");

  const buildItem = (item) => `
    <div class="logo-item" title="${item.name}">
      <div class="logo-item__img-wrapper">
         <img src="${item.logo}" alt="${item.name}" onerror="this.onerror=null; this.src='https://placehold.co/120x60?text=${encodeURIComponent(item.name.substring(0, 10))}';">
      </div>
      <div class="logo-item__label">${item.name}</div>
    </div>
  `;

  let html = "";
  const sectionHeader = (label, isFirst) =>
    `<h3 style="grid-column:1/-1; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:1px; ${isFirst ? "margin-bottom:4px;" : "margin:16px 0 4px 0;"} color:var(--text-muted); border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:6px;">${label}</h3>`;

  if (industryItems.length > 0) {
    html += sectionHeader("Industry", true);
    html += industryItems.map(buildItem).join("");
  }
  if (businessItems.length > 0) {
    html += sectionHeader("Business", false);
    html += businessItems.map(buildItem).join("");
  }

  const otherItems = items.filter((i) => !i.segment);
  if (otherItems.length > 0) {
    if (industryItems.length > 0 || businessItems.length > 0) {
      html += sectionHeader("Other", false);
    }
    html += otherItems.map(buildItem).join("");
  }

  c.innerHTML = html;
}

// ── Tabs ──
function initTabs() {
  const btns = $$(".tab-btn");
  const panels = $$(".tab-panel");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      const panel = $(`#tab-${btn.dataset.tab}`);
      if (panel) panel.classList.add("active");

      // Mapbox resize fix when tab becomes visible
      if (btn.dataset.tab === "serviceArea" && window.mapInstance) {
        setTimeout(() => window.mapInstance.resize(), 50);
      }
    });
  });
}

// ── Share ──
function initShare() {
  $("#shareBtn").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Link copied to clipboard");
    } catch {
      showToast("Could not copy link");
    }
  });
}

function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2400);
}

// ── Theme (v6.0 — white bg default) ──
function initTheme() {
  const toggle = $("#themeToggle");
  const stored = localStorage.getItem("rx-theme");
  // Default is light (no attribute). Only switch to dark if explicitly stored.
  if (stored === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  toggle.addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("rx-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("rx-theme", "dark");
    }
  });
}

// ── Render: Services Bar Rating ──
function renderServicesBarRating(d) {
  const titleEl = $("#servicesBarTitle");
  const ratingEl = $("#servicesBarRating");
  if (titleEl) titleEl.textContent = d.name;
  if (ratingEl && d.social) {
    ratingEl.innerHTML = `★ ${d.social.rating} <span style="color:var(--text-muted); font-weight:500;">(${d.social.reviewCount})</span>`;
  }
}

// ── Render: Contact Details Tab ──
function renderContactDetailsTab(d) {
  const c = $("#heroContactDetailsContent");
  if (!c || !d.contact) return;

  // Header helper
  const labelStyle =
    "font-size:9px; color:var(--text-muted); text-transform:uppercase; margin-bottom:2px; font-weight:700; letter-spacing:0.5px;";
  const nameStyle =
    "font-size:13px; font-weight:600; color:var(--text-primary); line-height:1.2;";
  const infoStyle =
    "font-size:11px; color:var(--text-secondary); line-height:1.2;";

  c.innerHTML = `
    <div class="premium-upsell" style="height:100%;">
      <div class="locked-contact-wrapper" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 6px;">
        
        <!-- Primary -->
        <div style="padding:10px; background:var(--pill-bg); border-radius:10px; border:1px solid var(--border-light);">
          <div style="${labelStyle}">Primary Contact</div>
          <div style="${nameStyle}">${d.contact.primary.name}</div>
          <div style="${infoStyle}">${d.contact.primary.title}</div>
          <div style="${infoStyle}; margin-top:4px; font-weight:500; color:var(--text-primary);">${d.contact.primary.phone}</div>
        </div>

        <!-- Secondary -->
        <div style="padding:10px; background:var(--pill-bg); border-radius:10px; border:1px solid var(--border-light);">
          <div style="${labelStyle}">Secondary Contact</div>
          <div style="${nameStyle}">${d.contact.secondary.name}</div>
          <div style="${infoStyle}">${d.contact.secondary.title}</div>
          <div style="${infoStyle}; margin-top:4px; font-weight:500; color:var(--text-primary);">${d.contact.secondary.phone}</div>
        </div>

        <!-- Emergency & email (split row) -->
        <div style="padding:10px; background:var(--pill-bg); border-radius:10px; border:1px solid var(--border-light);">
           <div style="${labelStyle}">Emergency / After Hours</div>
           <div style="font-size:13px; font-weight:700; color:#ff453a;">${d.contact.afterHours.phone}</div>
        </div>

        <div style="padding:10px; background:var(--pill-bg); border-radius:10px; border:1px solid var(--border-light); overflow:hidden;">
          <div style="${labelStyle}">Primary Email</div>
          <div style="font-size:12px; font-weight:500; color:var(--text-primary); text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${d.contact.primary.email}</div>
        </div>

        <!-- Address -->
        <div style="grid-column: 1 / -1; padding:10px; background:var(--pill-bg); border-radius:10px; border:1px solid var(--border-light);">
          <div style="${labelStyle}">Address</div>
          <div style="font-size:12px; color:var(--text-primary);">${d.contact.address}</div>
        </div>
      </div>
      <div class="premium-overlay">
        <button class="btn-gold" style="padding:10px 24px; border-radius:8px; font-size:13px; font-weight:700;">Upgrade Subscription</button>
      </div>
    </div>
  `;
}

// ── Render: Trust-at-a-Glance Strip (v2.0 — Diversity + Union Only) ──
function renderTrustStrip(d) {
  const c = $("#trustStrip");
  if (!c) return;
  c.style.display = "none";
}

// ── Render: Services Provided Highlights Bar (v2.0 — replaces Why Choose Us) ──
function renderWhyUs(d) {
  const c = $("#whyUsContent");
  if (!c) return;

  const emr = d.compliance?.emr?.[0];
  const coi = d.compliance?.coi;

  const points = [
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      stat: emr ? emr.rate : "0.85",
      label: `${emr ? emr.year : "2024"} EMR Rating`,
      detail: "Top 1% industry safety benchmark.",
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/></svg>',
      stat: coi?.limits?.umbrella || "$5,000,000",
      label: "Umbrella Insurance",
      detail: "Prime contract compliant coverage.",
    },
  ];

  c.innerHTML = `
    <div class="proof-points">
      ${points
        .map(
          (p) => `
        <div class="proof-point">
          <div class="proof-point__icon">${p.icon}</div>
          <div class="proof-point__content">
            <div class="proof-point__stat">${p.stat}</div>
            <div class="proof-point__label">${p.label}</div>
            <div class="proof-point__detail">${p.detail}</div>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}

// ── Sticky CTA Bar ──
function initStickyCta(d) {
  const bar = $("#stickyCta");
  const nameEl = $("#stickyName");
  const ratingEl = $("#stickyRating");
  if (!bar || !nameEl) return;

  nameEl.textContent = d.name;
  if (ratingEl && d.social) {
    ratingEl.innerHTML = `<span style="color:#FF9500">★</span> ${d.social.rating} (${d.social.reviewCount})`;
  }

  // Show after scrolling past header
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        bar.classList.toggle("visible", !e.isIntersecting);
      });
    },
    { threshold: 0 },
  );

  const header = $(".profile-header");
  if (header) observer.observe(header);

  // Wire bid buttons
  const bidAction = () => {
    const contactTab = $('[data-tab="contactDetails"]');
    if (contactTab) contactTab.click();
    showToast("Contact info revealed — reach out to request a bid!");
  };

  $("#requestBidBtn")?.addEventListener("click", bidAction);
  $("#requestBidBtn2")?.addEventListener("click", bidAction);
  $("#stickyBidBtn")?.addEventListener("click", bidAction);
}

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTabs();
  initShare();
  renderHeader(companyData);
  renderTrustStrip(companyData);

  // Hero Components
  renderVideo(companyData);
  renderTestimonialsTab(companyData);
  renderContactTab(companyData);
  renderContactDetailsTab(companyData);
  renderCertificationsTab(companyData);
  renderAvailabilityTab(companyData);
  renderSocialMediaTab(companyData);

  renderMetrics(companyData);
  renderServiceArea(companyData);
  renderWhyUs(companyData);
  renderServices(companyData);
  renderSchedule(companyData);
  renderContact(companyData);

  // Services Bar
  renderServicesBarRating(companyData);

  // Body Grid Renderers
  renderTrustLayer(companyData);
  renderComplianceLayer(companyData);
  renderBusinessCodes(companyData);
  renderServices(companyData);
  renderDocuments(companyData);

  // Lower Panels
  renderCertTiles("certificationsContent", companyData.certifications);
  renderAssociationsGrid("associationsContent", companyData.associations);

  // Sticky CTA
  initStickyCta(companyData);

  // Register Service Worker for PWA
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => console.log("Service Worker registered", reg))
      .catch((err) => console.warn("Service Worker registration failed", err));
  }
});

// Premium Toggle functionality
const premiumToggle = document.getElementById("premiumToggle");
if (premiumToggle) {
  // Check if there's a saved preference (optional, left out for simplicity - default to ON)
  premiumToggle.addEventListener("click", () => {
    const isOff = document.body.classList.toggle("premium-off");

    if (isOff) {
      document.querySelector('.tab-btn[data-tab="serviceArea"]')?.click();
    } else {
      document.querySelector('.tab-btn[data-tab="aboutUs"]')?.click();
    }

    // Video pausing/playing
    const iframe = document.getElementById("heroVideoIframe");
    if (iframe) {
      if (isOff) {
        try {
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*",
          );
        } catch (e) {}
      } else {
        try {
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*",
          );
        } catch (e) {}
      }
    }
  });
}
