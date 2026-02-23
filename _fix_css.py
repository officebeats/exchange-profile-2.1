filepath = r'c:\Users\admin-beats\OneDrive\xo Vibe Coding xo\exchange-profile-repo\exchange-profile\styles.css'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

NL = '\r\n' if '\r\n' in content else '\n'

# ── 1. Fix logo-item: remove any grayscale, improve img sizing ──
OLD_IMG_WRAPPER = (
    '.logo-item__img-wrapper {' + NL +
    '  height: 54px;' + NL +
    '  width: 100%;' + NL +
    '  display: flex;' + NL +
    '  align-items: center;' + NL +
    '  justify-content: center;' + NL +
    '}' + NL +
    NL +
    '.logo-item__img-wrapper img {' + NL +
    '  max-height: 100%;' + NL +
    '  max-width: 85%;' + NL +
    '  object-fit: contain;' + NL +
    '}'
)

NEW_IMG_WRAPPER = (
    '.logo-item__img-wrapper {' + NL +
    '  height: 64px;' + NL +
    '  width: 100%;' + NL +
    '  display: flex;' + NL +
    '  align-items: center;' + NL +
    '  justify-content: center;' + NL +
    '  overflow: hidden;' + NL +
    '}' + NL +
    NL +
    '.logo-item__img-wrapper img {' + NL +
    '  max-height: 56px;' + NL +
    '  max-width: 90%;' + NL +
    '  width: auto;' + NL +
    '  object-fit: contain;' + NL +
    '  filter: none;' + NL +
    '  image-rendering: -webkit-optimize-contrast;' + NL +
    '}'
)

if OLD_IMG_WRAPPER in content:
    content = content.replace(OLD_IMG_WRAPPER, NEW_IMG_WRAPPER)
    print('Fixed logo-item img wrapper')
else:
    print('WARNING: logo-item img wrapper pattern not found, trying partial match...')
    # Update just the height
    content = content.replace('  height: 54px;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}', 
                              '  height: 64px;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}')
    # Add filter: none to img rule
    content = content.replace('  max-height: 100%;\r\n  max-width: 85%;\r\n  object-fit: contain;\r\n}',
                              '  max-height: 56px;\r\n  max-width: 90%;\r\n  width: auto;\r\n  object-fit: contain;\r\n  filter: none;\r\n}')
    print('Applied partial logo fixes')

# ── 2. Insert cert-grid / cert-tile CSS after the logo section ──
INSERT_AFTER = '/* Premium Styling */'

CERT_CSS = (
    '/* --- Certification Tiles Grid --- */' + NL +
    '.cert-grid {' + NL +
    '  display: grid;' + NL +
    '  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));' + NL +
    '  gap: 14px;' + NL +
    '  margin-top: 16px;' + NL +
    '}' + NL +
    NL +
    '.cert-tile {' + NL +
    '  display: flex;' + NL +
    '  flex-direction: column;' + NL +
    '  align-items: center;' + NL +
    '  justify-content: center;' + NL +
    '  background: var(--pill-bg);' + NL +
    '  border-radius: 14px;' + NL +
    '  border: 1px solid var(--border-light);' + NL +
    '  padding: 20px 12px 16px;' + NL +
    '  gap: 10px;' + NL +
    '  text-align: center;' + NL +
    '  cursor: default;' + NL +
    '  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease, border-color 0.2s ease;' + NL +
    '}' + NL +
    NL +
    '.cert-tile:hover {' + NL +
    '  transform: translateY(-6px) scale(1.03);' + NL +
    '  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);' + NL +
    '  border-color: var(--accent);' + NL +
    '  background: var(--card-bg);' + NL +
    '}' + NL +
    NL +
    '.cert-tile__logo {' + NL +
    '  width: 56px;' + NL +
    '  height: 56px;' + NL +
    '  display: flex;' + NL +
    '  align-items: center;' + NL +
    '  justify-content: center;' + NL +
    '  overflow: hidden;' + NL +
    '}' + NL +
    NL +
    '.cert-tile__logo img {' + NL +
    '  max-width: 100%;' + NL +
    '  max-height: 100%;' + NL +
    '  object-fit: contain;' + NL +
    '  filter: none;' + NL +
    '}' + NL +
    NL +
    '.cert-tile__initials {' + NL +
    '  width: 48px;' + NL +
    '  height: 48px;' + NL +
    '  border-radius: 50%;' + NL +
    '  background: var(--accent);' + NL +
    '  color: white;' + NL +
    '  font-size: 16px;' + NL +
    '  font-weight: 700;' + NL +
    '  align-items: center;' + NL +
    '  justify-content: center;' + NL +
    '}' + NL +
    NL +
    '.cert-tile__name {' + NL +
    '  font-size: 10px;' + NL +
    '  font-weight: 700;' + NL +
    '  color: var(--text-primary);' + NL +
    '  text-transform: uppercase;' + NL +
    '  letter-spacing: 0.3px;' + NL +
    '  line-height: 1.3;' + NL +
    '}' + NL +
    NL
)

if INSERT_AFTER in content:
    content = content.replace(INSERT_AFTER, CERT_CSS + INSERT_AFTER)
    print('Inserted cert-grid CSS')
else:
    print('ERROR: INSERT_AFTER marker not found')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done! styles.css updated.')
