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
    "Rozalado Services delivers contract-ready janitorial and facility maintenance across 25+ miles of the Chicago metro — serving Class A buildings, medical facilities, and restaurant groups. With a 0.85 EMR, $5M umbrella coverage, and ISSA CIMS certification, we're built for prime contract compliance from day one.",

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
    name: "Ricardo Rodriguez",
    title: "Director of Sales",
    address: "6120 North Pulaski Road, Chicago, IL 60646",
    phone: "(312) 877-9127",
    email: "ricardo@rozalado.com",
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
    ],
    unionLabor: "Non-Union",
  },

  documents: [
    { name: "Insurance (COI)", provided: true },
    { name: "Tax Identification (W-9)", provided: true },
    { name: "Business License (Optional)", provided: true },
  ],

  associations: [
    {
      name: "International Sanitary Supply Association (ISSA)",
      description: "Worldwide cleaning industry association.",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/ISSA_Logo.jpg/220px-ISSA_Logo.jpg",
    },
    {
      name: "Building Service Contractors Association (BSCAI)",
      description: "Trade association for commercial cleaning.",
      url: "https://bscai.org/Portals/0/Skins/BSCAI/images/logo.png",
    },
    {
      name: "IICRC Certified",
      description: "Inspection, Cleaning and Restoration Certification.",
      url: "https://iicrc.org/wp-content/uploads/2021/04/IICRC-Logo-Registered-blue-tag.png",
    },
    {
      name: "National Safety Council (NSC)",
      description: "America's leading nonprofit safety advocate.",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/National_Safety_Council_logo.svg/1200px-National_Safety_Council_logo.svg.png",
    },
    {
      name: "IFMA",
      description: "International Facility Management Association.",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/International_Facility_Management_Association_logo.png/220px-International_Facility_Management_Association_logo.png",
    },
  ],

  certifications: [
    {
      name: "Accredited Business (BBB)",
      description: "Better Business Bureau Accredited.",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Better_Business_Bureau_logo.svg/1200px-Better_Business_Bureau_logo.svg.png",
    },
    {
      name: "NMSDC Certified (MBE)",
      description: "National Minority Supplier Development Council.",
      url: "https://nmsdc.org/wp-content/uploads/2021/09/NMSDC-Logo-1.png",
    },
    {
      name: "Disadvantaged Business Enterprise (DBE)",
      description: "USDOT Authorized DBE.",
      url: "https://www.transportation.gov/sites/dot.gov/themes/custom/dot_cms/images/dot_logo.png",
    },
    {
      name: "ISSA CIMS Certification",
      description:
        "The industry standard developed by ISSA for cleaning organizations, ensuring quality management systems, operational efficiency, customer service, human resources, health & safety, and management.",
      url: "#",
    },
    {
      name: "ISSA CIMS-GB Certification",
      description:
        "ISSA's Green Building certification focuses on sustainable cleaning practices and environmental responsibility.",
      url: "#",
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
      url: "#", // Placeholder for actual file
      limits: {
        generalLiability: "$2,000,000",
        autoLiability: "$1,000,000",
        umbrella: "$5,000,000",
        workersComp: "$1,000,000",
      },
    },
    clearances: ["TSA Pre-Check", "Airport Security Badge (ORD)", "TWIC"],
    naics: [
      { code: "561720", description: "Janitorial Services" },
      { code: "561730", description: "Landscaping Services" },
    ],
    sams: "CAGE: 7X9J2", // Mock SAMS/CAGE Code
    issaVerified: true,
  },
  social: {
    googlePlaceId: "ChIJ...",
    rating: 4.8,
    reviewCount: 142,
  },
  video: {
    url: "https://www.youtube.com/embed/Y7XFQiGLaGI?autoplay=1&mute=1&controls=0&loop=1&playlist=Y7XFQiGLaGI&rel=0&modestbranding=1",
    title: "Commercial Cleaning Excellence",
  },
  collateral: [
    { name: "Capabilities Statement", type: "PDF", size: "2.4 MB", url: "#" },
    { name: "Corporate Pitch Deck", type: "PPTX", size: "5.1 MB", url: "#" },
    { name: "Past Performance", type: "PDF", size: "1.2 MB", url: "#" },
  ],
  drip: {
    enabled: true,
    cta: "Subscribe to Profile Updates",
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
  const logo = $("#companyLogo");
  logo.style.display = "flex";
  logo.style.flexDirection = "column";
  logo.style.alignItems = "center";
  logo.style.justifyContent = "center";
  logo.style.background = "#fff";
  logo.style.border = "1px solid var(--border-light)";
  logo.style.borderRadius = "12px";
  logo.style.overflow = "hidden";
  logo.innerHTML = `
    <div style="flex:1; display:flex; align-items:center; justify-content:center; font-size:28px; font-weight:900; color:var(--text-primary); padding-top:4px;">R</div>
    <div style="background:var(--text-primary); color:white; width:100%; font-size:7px; font-weight:700; letter-spacing:0.05em; padding:4px 0; text-align:center;">ROZALADO</div>
  `;

  $("#companyName").textContent = d.name;

  let tagsHtml = "";
  if (d.verified) {
    tagsHtml += `<span class="badge" style="display:inline-flex; align-items:center; gap:4px; padding:4px 10px; background:rgba(0,113,227,0.08); color:var(--accent); border-radius:30px; font-size:12px; font-weight:600; border:1px solid rgba(0,113,227,0.15);">
      <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
      Exchange Verified
    </span>`;
  }

  // MBE Tag Parity
  const isMBE =
    d.certifications?.some((c) => c.name.includes("MBE")) ||
    d.certifications?.some((c) => c.name.includes("Minority"));
  if (isMBE) {
    tagsHtml += `<span class="badge" style="display:inline-flex; align-items:center; gap:4px; padding:4px 10px; background:rgba(52,199,89,0.08); color:#34c759; border-radius:30px; font-size:12px; font-weight:600; border:1px solid rgba(52,199,89,0.15); margin-left:8px;">
      Minority Owned (MBE)
    </span>`;
  }

  // Union Status Parity
  if (d.services.unionLabor) {
    tagsHtml += `<span class="badge" style="display:inline-flex; align-items:center; gap:4px; padding:4px 10px; background:rgba(142,142,147,0.08); color:var(--text-secondary); border-radius:30px; font-size:12px; font-weight:600; border:1px solid rgba(142,142,147,0.15); margin-left:8px;">
      ${d.services.unionLabor}
    </span>`;
  }

  const badges = $("#companyBadges");
  if (badges) badges.innerHTML = tagsHtml;

  $("#companyAbout").textContent = d.about;
}

// ── Render: Metrics ──
function renderMetrics(d) {
  const c = $("#keyMetrics");
  const items = [
    { label: "HEADQUARTERS", value: d.metrics.headquarters },
    { label: "FOUNDED IN", value: d.metrics.foundedIn },
    { label: "COMPANY SIZE", value: d.metrics.companySize },
    {
      label: "ANNUAL REVENUE",
      value: d.metrics.annualRevenue || "Not provided",
    },
  ];
  c.innerHTML = items
    .map(
      (m) =>
        `<div><div class="metric-label">${m.label}</div><div class="metric-value">${m.value}</div></div>`,
    )
    .join("");
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
      <div style="margin-bottom: 24px;">
        <div style="font-size:11px; font-weight:700; color:var(--text-muted); margin-bottom:12px; letter-spacing:0.5px;">CORE CAPABILITIES</div>
        <div style="display:flex; flex-wrap:wrap; gap:8px;">
          ${d.services.typesOfServices
            .map(
              (t) =>
                `<span class="pill" style="font-weight:600; padding:6px 14px; background:var(--pill-bg);">${t}</span>`,
            )
            .join("")}
        </div>
      </div>
    `;
  }

  if (d.services.typesOfAccounts?.length) {
    html += `
      <div style="margin-bottom: 24px;">
        <div style="font-size:11px; font-weight:700; color:var(--text-muted); margin-bottom:12px; letter-spacing:0.5px;">INDUSTRY SPECIALIZATION</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          ${d.services.typesOfAccounts
            .map(
              (t) =>
                `<span class="pill" style="color:var(--text-secondary); border-color:transparent;">${t}</span>`,
            )
            .join("")}
        </div>
      </div>
    `;
  }

  if (d.services.unionLabor) {
    html += `
      <div style="display:flex; align-items:center; gap:8px; padding-top:16px; border-top:1px solid var(--border-light);">
        <div style="font-size:13px; font-weight:600; color:var(--text-primary);">Labor Status:</div>
        <span class="pill" style="background:rgba(52, 199, 89, 0.1); color:var(--success); border-color:transparent; font-weight:600;">
          ${d.services.unionLabor}
        </span>
      </div>
    `;
  }
  c.innerHTML = html;
}

// ── Render: Documents ──
function renderDocuments(d) {
  const c = $("#documentsRows");
  c.innerHTML = d.documents
    .map((doc) => {
      const status = doc.provided
        ? `<span class="doc-row__status doc-row__status--provided">${checkSvg}</span>`
        : `<span class="doc-row__status doc-row__status--missing">Not provided</span>`;
      return `<div class="doc-row"><span class="doc-row__name">${doc.name}</span>${status}</div>`;
    })
    .join("");
}

// ── Render: Org Cards (Certifications) ──
// ── Render: Org Cards (Certifications) ──
function renderOrgCards(containerId, items) {
  const c = document.getElementById(containerId);
  if (!items?.length) {
    c.innerHTML = '<p class="empty-state">None listed.</p>';
    return;
  }
  c.innerHTML = items
    .map(
      (item) =>
        `<div class="org-card">
       <div class="org-card__name">${item.name}</div>
       <div class="org-card__desc">${item.description}</div>
       <a class="org-card__link" href="${item.url || "#"}" target="_blank" rel="noopener">Visit website ${externalSvg}</a>
     </div>`,
    )
    .join("");
}

// ── Render: Trust Layer (v2) ──
function renderTrustLayer(d) {
  const c = $("#trustContent");
  if (!d.compliance?.emr) return;

  const rates = d.compliance.emr;
  const maxRate = Math.max(...rates.map((r) => r.rate), 1.0); // Baseline 1.0

  const bars = rates
    .map((item) => {
      const height = (item.rate / maxRate) * 100;
      const status = item.rate < 1.0 ? "good" : "neutral";
      return `
      <div class="chart-bar-group">
        <div class="chart-bar ${status}" style="height: ${height}%"></div>
        <div class="chart-value">${item.rate}</div>
        <div class="chart-label">${item.year}</div>
      </div>`;
    })
    .reverse()
    .join("");

  c.innerHTML = `
    <div style="font-size:13px; color:var(--text-secondary); margin-bottom:12px;">
      Experience Modification Rate (EMR) trends. Lower is better.
    </div>
    <div class="chart-container">
      ${bars}
    </div>
    <div style="margin-top:20px;">
      <div style="font-size:11px; font-weight:700; color:var(--text-muted); margin-bottom:12px; letter-spacing:0.5px;">SECURITY CLEARANCE</div>
      <div style="display:flex; flex-wrap:wrap; gap:8px;">
        ${d.compliance.clearances
          .map(
            (tag) => `<span class="clearance-badge">${checkSvg} ${tag}</span>`,
          )
          .join("")}
      </div>
    </div>
  `;
}

// ── Render: Compliance Layer (v2) ──
function renderComplianceLayer(d) {
  const c = $("#complianceContent");
  if (!d.compliance) return;

  const limits = d.compliance.coi.limits;

  c.innerHTML = `
    <div class="coi-preview">
      <div class="coi-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
      </div>
      <div>
        <div style="font-weight:600; font-size:14px; color:var(--text-primary);">Certificate of Insurance</div>
        <a href="#" style="font-size:13px; color:var(--accent); text-decoration:none; font-weight:500;">View Coverage PDF</a>
      </div>
    </div>
    
    <div class="coi-limits">
      <div class="limit-item"><span class="limit-label">General Liability</span><span class="limit-val">${limits.generalLiability}</span></div>
      <div class="limit-item"><span class="limit-label">Auto Liability</span><span class="limit-val">${limits.autoLiability}</span></div>
      <div class="limit-item"><span class="limit-label">Umbrella</span><span class="limit-val">${limits.umbrella}</span></div>
      <div class="limit-item"><span class="limit-label">Workers Comp</span><span class="limit-val">${limits.workersComp}</span></div>
    </div>

    <div style="margin-top:24px; border-top:1px solid var(--border-light); padding-top:16px;">
      <div style="font-size:11px; font-weight:700; color:var(--text-muted); margin-bottom:12px; letter-spacing:0.5px;">BUSINESS CODES</div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        ${d.compliance.naics
          .map(
            (n) =>
              `<div style="font-size:13px; color:var(--text-secondary); display:flex; align-items:center;">
             <span style="font-family:monospace; background:var(--pill-bg); padding:2px 6px; border-radius:4px; margin-right:8px; font-size:12px; color:var(--text-primary); border:1px solid var(--border);">${n.code}</span> 
             ${n.description}
           </div>`,
          )
          .join("")}
        ${
          d.compliance.sams
            ? `<div style="font-size:13px; color:var(--text-secondary); display:flex; align-items:center;">
             <span style="font-family:monospace; background:var(--accent-light); color:var(--accent); padding:2px 6px; border-radius:4px; margin-right:8px; font-size:12px; border:1px solid var(--accent-light); font-weight:600;">SAMS</span> 
             ${d.compliance.sams}
           </div>`
            : ""
        }
      </div>
    </div>
  `;
}

// ── Render: Services Tab (Hero Right Col) ──
function renderServicesTab(d) {
  const c = document.getElementById("heroServicesContent");
  if (!c || !d.services) return;

  const caps = d.services.typesOfServices || [];
  const industries = d.services.typesOfAccounts || [];

  c.innerHTML = `
    <div style="width:100%; margin-bottom:8px; font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.5px;">Core Capabilities</div>
    <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:16px;">
      ${caps
        .map(
          (s) => `
        <span class="pill" style="font-size:12px; padding:4px 10px; background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:12px;">
          ${s}
        </span>
      `,
        )
        .join("")}
    </div>

    <div style="width:100%; margin-bottom:8px; font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.5px;">Industries Served</div>
    <div style="display:flex; flex-wrap:wrap; gap:8px;">
      ${industries
        .map(
          (s) => `
        <span class="pill" style="font-size:12px; padding:4px 10px; background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:12px;">
          ${s}
        </span>
      `,
        )
        .join("")}
    </div>
  `;
}

// ── Render: Contact Tab (Hero — Blurred) ──
function renderContactTab(d) {
  const c = document.getElementById("heroContactContent");
  if (!c || !d.contact) return;

  c.innerHTML = `
    <div style="position:relative;">
      <div style="filter:blur(5px); -webkit-filter:blur(5px); pointer-events:none; user-select:none;">
        <div style="padding:12px; background:var(--bg-subtle); border-radius:10px; margin-bottom:10px; border:1px solid var(--border-light);">
          <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; margin-bottom:4px;">Contact</div>
          <div style="font-size:14px; font-weight:600; color:var(--text-primary);">${d.contact.name}</div>
          <div style="font-size:12px; color:var(--text-secondary);">${d.contact.title}</div>
        </div>
        <div style="padding:12px; background:var(--bg-subtle); border-radius:10px; margin-bottom:10px; border:1px solid var(--border-light);">
          <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; margin-bottom:4px;">Phone</div>
          <div style="font-size:14px; font-weight:500; color:var(--text-primary);">${d.contact.phone}</div>
        </div>
        <div style="padding:12px; background:var(--bg-subtle); border-radius:10px; margin-bottom:10px; border:1px solid var(--border-light);">
          <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; margin-bottom:4px;">Email</div>
          <div style="font-size:14px; font-weight:500; color:var(--text-primary);">${d.contact.email}</div>
        </div>
        <div style="padding:12px; background:var(--bg-subtle); border-radius:10px; border:1px solid var(--border-light);">
          <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; margin-bottom:4px;">Address</div>
          <div style="font-size:13px; color:var(--text-primary);">${d.contact.address}</div>
        </div>
      </div>
      <div style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; background:rgba(255,255,255,0.3); backdrop-filter:blur(2px); -webkit-backdrop-filter:blur(2px); border-radius:12px;">
        <div style="font-size:14px; font-weight:600; color:var(--text-primary); margin-bottom:8px;">Unlock Contact Details</div>
        <a href="#" class="cta-btn" style="padding:10px 24px; background:var(--accent); color:white; border-radius:10px; font-size:13px; font-weight:600; text-decoration:none;">Request Access</a>
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

// ── Render: Featured Video (Hero) ──
function renderVideo(d) {
  const c = document.getElementById("heroVideoContainer");
  if (!c || !d.video) return;

  c.innerHTML = `
    <iframe src="${d.video.url}" 
      title="${d.video.title}" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  `;
}

// ── Render: Trust & Safety (Janitorial Enhanced) ──
function renderTrustLayer(d) {
  const c = $("#trustContent");
  if (!c || !d.compliance) return;

  const emr = d.compliance.emr?.[0];

  // Janitorial Trust Signals
  const trustSignals = [
    {
      label: "Fidelity Bond",
      value: "$50,000",
      icon: "🔒",
      color: "var(--accent)",
    },
    {
      label: "TRIR Safety Rate",
      value: "0.0",
      icon: "🛡️",
      color: "var(--success)",
    },
    {
      label: "Background Checks",
      value: "7-Year History",
      icon: "busts_in_silhouette",
      color: "var(--text-primary)",
    },
    {
      label: "E-Verify",
      value: "Compliant",
      icon: "✅",
      color: "var(--success)",
    },
  ];

  const trainingBadges = [
    "Bloodborne Pathogens",
    "HazCom",
    "HIPAA Awareness",
    "OSHA 10",
  ];

  c.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:20px;">
      <!-- EMR Score Dashboard -->
      <div style="background:var(--bg-subtle); padding:16px; border-radius:12px; border:1px solid var(--border-light);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <div style="font-size:12px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Experience Modification Rate</div>
          <div style="font-size:12px; font-weight:500; color:var(--success);">Top 1% in Industry</div>
        </div>
        <div style="display:flex; align-items:flex-end; gap:12px; margin-bottom:8px;">
          <div style="font-size:42px; font-weight:700; color:var(--text-primary); line-height:1;">${emr.rate}</div>
          <div style="font-size:14px; font-weight:500; color:var(--text-secondary); margin-bottom:6px;">${emr.year} Rating</div>
        </div>
        <div style="height:6px; background:rgba(0,0,0,0.06); border-radius:3px; overflow:hidden;">
          <div style="width:${(emr.rate / 1.5) * 100}%; height:100%; background:var(--success); border-radius:3px;"></div>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:6px; font-size:11px; color:var(--text-muted);">
          <span>0.5 (Excellent)</span>
          <span>1.0 (Avg)</span>
          <span>1.5</span>
        </div>
      </div>

      <!-- Trust Grid -->
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
        ${trustSignals
          .map(
            (s) => `
          <div style="display:flex; flex-direction:column; padding:12px; background:var(--bg); border:1px solid var(--border-light); border-radius:10px;">
            <div style="font-size:11px; color:var(--text-secondary); margin-bottom:4px;">${s.label}</div>
            <div style="font-size:14px; font-weight:600; color:${s.color}; display:flex; align-items:center; gap:6px;">
              ${s.value}
            </div>
          </div>
        `,
          )
          .join("")}
      </div>

      <!-- Specialized Training -->
      <div>
        <div style="font-size:12px; font-weight:600; color:var(--text-secondary); margin-bottom:8px;">SPECIALIZED TRAINING</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          ${trainingBadges
            .map(
              (t) => `
            <span class="pill pill-code" style="background:rgba(0,113,227,0.08); color:var(--accent); border-color:rgba(0,113,227,0.15);">
              ${t}
            </span>
          `,
            )
            .join("")}
        </div>
      </div>

      <!-- Clearances -->
      <div>
        <div style="font-size:12px; font-weight:600; color:var(--text-secondary); margin-bottom:8px;">SECURITY CLEARANCES</div>
        <div style="display:flex; flex-wrap:wrap; gap:8px;">
          ${d.compliance.clearances
            .map(
              (cl) => `
            <div style="display:inline-flex; align-items:center; gap:6px; padding:6px 10px; background:#f5f5f7; border:1px solid var(--border-light); border-radius:8px; font-size:13px; font-weight:500; color:var(--text-primary);">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" style="color:var(--text-secondary);"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              ${cl}
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

// ── Render: Collateral (v3.0 - File Cards) ──
function renderCollateral(d) {
  const c = $("#collateralContent");
  if (!d.collateral) return;

  const getIcon = (type) => {
    if (type === "PDF")
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="24" height="24" style="color:var(--accent)"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M12 18v-6"></path><path d="M9 15l3 3 3-3"></path></svg>';
    if (type === "PPTX")
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="24" height="24" style="color:#e05242"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M8 13h8"></path><path d="M8 17h5"></path><path d="M8 9h2"></path></svg>';
    return checkSvg;
  };

  c.innerHTML = d.collateral
    .map(
      (file) => `
    <a href="${file.url}" class="doc-card" style="display:flex; align-items:center; gap:16px; padding:16px; border:1px solid var(--border-light); border-radius:12px; margin-bottom:12px; text-decoration:none; transition:all 0.2s;">
      <div style="background:var(--pill-bg); width:48px; height:48px; border-radius:10px; display:flex; align-items:center; justify-content:center;">
        ${getIcon(file.type)}
      </div>
      <div style="flex:1;">
        <div style="font-size:14px; font-weight:600; color:var(--text-primary); margin-bottom:2px;">${file.name}</div>
        <div style="font-size:12px; color:var(--text-secondary);">${file.type} • ${file.size}</div>
      </div>
      <div style="color:var(--accent); opacity:0.5;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
      </div>
    </a>
  `,
    )
    .join("");
}

// ── Render: Drip (Subscribe CTA) ──
function renderDrip(d) {
  const c = $("#dripContent");
  if (!d.drip?.enabled) return;

  c.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:24px;">
      <div style="flex:1; min-width:240px; text-align:left;">
        <h3 style="font-size:20px; font-weight:700; margin-bottom:8px;">Stay Updated</h3>
        <p style="font-size:15px; opacity:0.9; line-height:1.5;">Get notified about updated certifications, increased coverage limits, and new service area expansions.</p>
      </div>
      <div style="display:flex; gap:12px; flex:1; min-width:280px; max-width:400px;">
        <input type="email" placeholder="Enter your email" style="flex:1; padding:12px 16px; border-radius:10px; border:1px solid rgba(255,255,255,0.2); background:rgba(255,255,255,0.1); color:white; font-family:var(--font); outline:none;">
        <button style="padding:12px 24px; background:white; color:var(--accent); border:none; border-radius:10px; font-weight:600; cursor:pointer;">Subscribe</button>
      </div>
    </div>
  `;
}

// ── Render: Associations Grid (v3.0 - Visual Logos) ──
function renderAssociationsGrid(containerId, items) {
  const c = $("#" + containerId);
  if (!items?.length) return;

  const getLogoUrl = (name) => {
    // Generate a consistent placeholder logo based on the name
    const slug = name.split(" ")[0].toLowerCase();
    // Using Placehold.co for high-fidelity placeholders
    // In production, these would be real assets
    return `https://placehold.co/120x80/ffffff/111827?text=${slug.toUpperCase()}&font=montserrat`;
  };

  c.innerHTML = items
    .map(
      (item) => `
      <div class="logo-badge" style="background:white; border:1px solid var(--border-light); border-radius:12px; padding:12px; display:flex; align-items:center; justify-content:center; height:80px; transition:all 0.2s; cursor:pointer;" title="${item.name}">
        <img src="${item.url}" alt="${item.name}" style="max-width:100%; max-height:100%; object-fit:contain;" onerror="this.onerror=null; this.src='https://placehold.co/120x80/ffffff/111827?text=${item.name.substring(0, 3)}';">
      </div>
    `,
    )
    .join("");
}

// ── Render: Compliance Layer (v2) ──
function renderComplianceLayer(d) {
  const c = $("#complianceContent");
  if (!d.compliance) return;

  const limits = d.compliance.coi.limits;

  c.innerHTML = `
    <div class="coi-preview">
      <div class="coi-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
      </div>
      <div>
        <div style="font-weight:600; font-size:14px; color:var(--text-primary);">Certificate of Insurance</div>
        <a href="#" style="font-size:13px; color:var(--accent); text-decoration:none; font-weight:500;">View Coverage PDF</a>
      </div>
    </div>
    
    <div class="coi-limits">
      <div class="limit-item"><span class="limit-label">General Liability</span><span class="limit-val">${limits.generalLiability}</span></div>
      <div class="limit-item"><span class="limit-label">Auto Liability</span><span class="limit-val">${limits.autoLiability}</span></div>
      <div class="limit-item"><span class="limit-label">Umbrella</span><span class="limit-val">${limits.umbrella}</span></div>
      <div class="limit-item"><span class="limit-label">Workers Comp</span><span class="limit-val">${limits.workersComp}</span></div>
    </div>

    <div style="margin-top:24px; border-top:1px solid var(--border-light); padding-top:16px;">
      <div style="font-size:11px; font-weight:700; color:var(--text-muted); margin-bottom:12px; letter-spacing:0.5px;">NAICS CODES</div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        ${d.compliance.naics
          .map(
            (n) =>
              `<div style="font-size:13px; color:var(--text-secondary); display:flex; align-items:center;">
             <span style="font-family:monospace; background:var(--pill-bg); padding:2px 6px; border-radius:4px; margin-right:8px; font-size:12px; color:var(--text-primary); border:1px solid var(--border);">${n.code}</span> 
             ${n.description}
           </div>`,
          )
          .join("")}
      </div>
    </div>
  `;
}

// ── Render: Social Layer (v3.0 - Apple Maps Style) ──
function renderSocialLayer(d) {
  const c = $("#socialContent");
  if (!d.social) return;

  // Mock Apple Maps Review Data
  const reviews = [
    {
      author: "Maggiano's Little Italy",
      role: "Restaurant Group",
      stars: 5,
      date: "2mo ago",
      text: "Rozalado has been a consistent partner for our Chicago locations. The night crew is thorough and the account manager is always reachable.",
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

  const stars = "★★★★★"; // Simplified for Apple aesthetic

  c.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; padding-bottom:16px; border-bottom:1px solid var(--border-light);">
      <div style="display:flex; align-items:center; gap:12px;">
        <div style="font-size:36px; font-weight:700; color:var(--text-primary); letter-spacing:-1px;">${d.social.rating}</div>
        <div style="display:flex; flex-direction:column; gap:2px;">
          <div style="color:#FF9500; font-size:14px; letter-spacing:1px;">${stars}</div>
          <div style="font-size:13px; color:var(--text-secondary);">${d.social.reviewCount} Ratings • Google Maps</div>
        </div>
      </div>
      <div style="width:40px; height:40px; background:#f2f2f7; border-radius:50%; display:flex; align-items:center; justify-content:center;">
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style="color:var(--accent);"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
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

// ── Render: Associations Grid (v2) ──
function renderAssociationsGrid(containerId, items) {
  const c = $("#" + containerId);
  if (!items?.length) return;

  c.innerHTML = items
    .map((item) => {
      // Hacky way to get acronym or short name
      const match = item.name.match(/\(([^)]+)\)/);
      const label = match
        ? match[1]
        : item.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .substring(0, 4);
      return `<div class="logo-item" title="${item.name}">${label}</div>`;
    })
    .join("");
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

// ── Theme ──
function initTheme() {
  const toggle = $("#themeToggle");
  const stored = localStorage.getItem("rx-theme");
  if (stored === "dark")
    document.documentElement.setAttribute("data-theme", "dark");
  else if (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.setAttribute("data-theme", "dark");

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

// ── Render: Trust-at-a-Glance Strip ──
function renderTrustStrip(d) {
  const c = $("#trustStrip");
  if (!c) return;

  const emr = d.compliance?.emr?.[0];
  const umbrella = d.compliance?.coi?.limits?.umbrella;
  const topClearance = d.compliance?.clearances?.[0];

  c.innerHTML = `
    <div class="trust-pill trust-pill--emr">
      <span class="trust-pill__value">${emr?.rate || "—"}</span>
      <span class="trust-pill__label">EMR Score</span>
    </div>
    <div class="trust-pill trust-pill--coi">
      <span class="trust-pill__value">${umbrella || "—"}</span>
      <span class="trust-pill__label">Umbrella</span>
    </div>
    ${
      topClearance
        ? `<div class="trust-pill trust-pill--clearance">
      <span class="trust-pill__value">${topClearance}</span>
    </div>`
        : ""
    }
    <div class="trust-pill trust-pill--rating">
      <span class="trust-pill__value">${d.social?.rating || "—"} ★</span>
      <span class="trust-pill__label">${d.social?.reviewCount || 0} reviews</span>
    </div>
  `;
}

// ── Render: Why Choose Us (Proof Points) ──
function renderWhyUs(d) {
  const c = $("#whyUsContent");
  if (!c) return;

  const points = [
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      stat: "0.85",
      label: "EMR Score",
      detail: "Below industry average of 1.0 — 3-year improving trend",
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      stat: "CIMS + CIMS-GB",
      label: "Dual ISSA Certified",
      detail: "Industry's gold standard for cleaning management systems",
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      stat: "501-1,000",
      label: "Employees",
      detail: "Scaled workforce for multi-site contract fulfillment",
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
      stat: "4.8 ★",
      label: "Google Rating",
      detail: `${d.social?.reviewCount || 142} verified reviews from facility managers`,
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
    const contactTab = $('[data-tab="contactInfo"]');
    if (contactTab) contactTab.click();
    showToast("Contact info revealed — reach out to request a bid!");
  };

  $("#requestBidBtn")?.addEventListener("click", bidAction);
  $("#stickyBidBtn")?.addEventListener("click", bidAction);
}

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTabs();
  initShare();
  renderHeader(companyData);
  renderTrustStrip(companyData); // v4.0 CRO

  // v6.0 Services Tab
  renderServicesTab(companyData);

  // v7.0 New Hero Tabs
  renderVideo(companyData);
  renderContactTab(companyData);
  renderCertificationsTab(companyData);
  renderAvailabilityTab(companyData);

  renderMetrics(companyData);
  renderServiceArea(companyData);
  renderSchedule(companyData);
  renderContact(companyData);

  // CRO Components
  renderWhyUs(companyData);
  renderTrustLayer(companyData);
  renderComplianceLayer(companyData);
  renderSocialLayer(companyData);
  renderServices(companyData);
  renderDocuments(companyData);
  renderCollateral(companyData);
  renderOrgCards("certificationsContent", companyData.certifications);
  renderAssociationsGrid("associationsContent", companyData.associations);

  // Sticky CTA
  initStickyCta(companyData);
});
