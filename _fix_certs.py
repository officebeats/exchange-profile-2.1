import re

filepath = r'c:\Users\admin-beats\OneDrive\xo Vibe Coding xo\exchange-profile-repo\exchange-profile\app.js'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

NL = '\r\n' if '\r\n' in content else '\n'

# ── 1. Replace renderOrgCards calls with renderCertTiles ──
# First, add a new renderCertTiles function after the renderAssociationsGrid function

# Find the renderOrgCards call in init and replace with renderCertTiles
content = content.replace(
    'renderOrgCards("certificationsContent", companyData.certifications);',
    'renderCertTiles("certificationsContent", companyData.certifications);'
)
print('Step 1: Replaced renderOrgCards call with renderCertTiles')

# ── 2. Insert renderCertTiles function before the renderAssociationsGrid function ──
INSERT_BEFORE = '// ── Render: Associations Grid (v2) ──'

new_fn = (
    '// ── Render: Certifications Tile Grid ──' + NL +
    'function renderCertTiles(containerId, items) {' + NL +
    '  const c = $("#" + containerId);' + NL +
    '  if (!c || !items?.length) return;' + NL +
    NL +
    '  // Use icon.horse for org logos; fallback to first letter pill' + NL +
    '  const logoFor = (item) => {' + NL +
    '    if (item.logo) return item.logo;' + NL +
    '    const domain = item.name.toLowerCase()' + NL +
    '      .replace(/[^a-z0-9 ]/g, "").split(" ")[0];' + NL +
    '    return `https://icon.horse/icon/${domain}.org`;' + NL +
    '  };' + NL +
    NL +
    '  c.className = "cert-grid";' + NL +
    '  c.innerHTML = items' + NL +
    '    .map((item) => `' + NL +
    '      <div class="cert-tile" title="${item.summary || item.name}">' + NL +
    '        <div class="cert-tile__logo">' + NL +
    '          <img src="${logoFor(item)}" alt="${item.name}"' + NL +
    '               onerror="this.onerror=null; this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' + NL +
    '          <div class="cert-tile__initials" style="display:none;">' + NL +
    '            ${item.name.split(/[^A-Z0-9]/)[0] || item.name.charAt(0)}' + NL +
    '          </div>' + NL +
    '        </div>' + NL +
    '        <div class="cert-tile__name">${item.name}</div>' + NL +
    '      </div>' + NL +
    '    `)' + NL +
    '    .join("");' + NL +
    '}' + NL +
    NL
)

if INSERT_BEFORE in content:
    content = content.replace(INSERT_BEFORE, new_fn + INSERT_BEFORE)
    print('Step 2: Inserted renderCertTiles function')
else:
    print('ERROR: Could not find insertion point for renderCertTiles')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done! app.js updated.')
