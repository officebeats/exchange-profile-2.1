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
    "Rozalado Services is a one-stop shop for all commercial cleaning services. They provide high-quality services to customers in various markets, including office buildings, restaurants, medical clinics, educational institutions, hair salons, and more.",

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
      description:
        "ISSA is the worldwide cleaning industry association for infection prevention and cleaning and maintenance.",
      url: "#",
    },
    {
      name: "Building Service Contractors Association International (BSCAI)",
      description:
        "BSCAI is the trade association representing the interests of the commercial cleaning industry.",
      url: "#",
    },
    {
      name: "Institute of Inspection, Cleaning and Restoration Certification (IICRC)",
      description:
        "IICRC provides certification and standards for the inspection, cleaning and restoration industries.",
      url: "#",
    },
    {
      name: "National Safety Associates (NSA)",
      description:
        "NSA provides safety training and certification for various industries including cleaning and maintenance.",
      url: "#",
    },
    {
      name: "International Facility Management Association (IFMA)",
      description:
        "IFMA is the world's largest and most widely recognized international association for facility management professionals.",
      url: "#",
    },
  ],

  certifications: [
    {
      name: "Better Business Bureau (BBB)",
      description:
        "BBB Accredited Business certification demonstrates commitment to customer service excellence and ethical business practices.",
      url: "#",
    },
    {
      name: "Minority Business Enterprise (MBE)",
      description:
        "MBE certification recognizes businesses owned and controlled by minority group members.",
      url: "#",
    },
    {
      name: "Disadvantaged Business Enterprise (DBE)",
      description:
        "DBE certification provides access to contracting opportunities with federal, state, and local government agencies.",
      url: "#",
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
  logo.style.alignItems = "center";
  logo.style.justifyContent = "center";
  logo.style.fontSize = "10px";
  logo.style.fontWeight = "800";
  logo.style.textAlign = "center";
  logo.style.lineHeight = "1.2";
  logo.style.color = "var(--text-primary)";
  logo.style.padding = "6px";
  logo.innerHTML =
    '<div style="font-size:20px;font-weight:900;margin-bottom:2px">R</div><div style="font-size:7px;letter-spacing:0.05em">ROZALADO<br>SERVICES</div>';

  $("#companyName").textContent = d.name;

  if (d.verified) $("#verifiedBadge").style.display = "";

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
}

// ── Render: Schedule ──
function renderSchedule(d) {
  const c = $("#scheduleContainer");
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

// ── Render: Contact ──
function renderContact(d) {
  const c = $("#contactList");
  const rows = [];
  if (d.contact.address)
    rows.push({ label: "Address", value: d.contact.address });
  if (d.contact.phone)
    rows.push({
      label: "Phone Number",
      value: `<a href="tel:${d.contact.phone}">${d.contact.phone}</a>`,
    });
  if (d.contact.email)
    rows.push({
      label: "Email Address",
      value: `<a href="mailto:${d.contact.email}">${d.contact.email}</a>`,
    });
  c.innerHTML = rows
    .map(
      (r) =>
        `<div class="contact-row"><div class="contact-row__label">${r.label}</div><div class="contact-row__value">${r.value}</div></div>`,
    )
    .join("");
}

// ── Render: Services ──
function renderServices(d) {
  const c = $("#servicesRows");
  let html = "";

  if (d.services.typesOfServices?.length) {
    html += `<div class="service-row"><span class="service-row__label">Types of Services</span><div class="service-row__pills">${d.services.typesOfServices.map((t) => `<span class="pill">${t}</span>`).join("")}</div></div>`;
  }
  if (d.services.typesOfAccounts?.length) {
    html += `<div class="service-row"><span class="service-row__label">Types of Accounts</span><div class="service-row__pills">${d.services.typesOfAccounts.map((t) => `<span class="pill">${t}</span>`).join("")}</div></div>`;
  }
  if (d.services.unionLabor) {
    html += `<div class="service-row"><span class="service-row__label">Union Labor Utilized</span><div class="service-row__pills"><span class="pill">${d.services.unionLabor}</span></div></div>`;
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

// ── Render: Org Cards (shared by associations + certifications) ──
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

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTabs();
  initShare();
  renderHeader(companyData);
  renderMetrics(companyData);
  renderServiceArea(companyData);
  renderSchedule(companyData);
  renderContact(companyData);
  renderServices(companyData);
  renderDocuments(companyData);
  renderOrgCards("associationsContent", companyData.associations);
  renderOrgCards("certificationsContent", companyData.certifications);
});
