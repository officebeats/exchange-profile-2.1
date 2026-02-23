filepath = r'c:\Users\admin-beats\OneDrive\xo Vibe Coding xo\exchange-profile-repo\exchange-profile\index.html'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

NL = '\r\n' if '\r\n' in content else '\n'

# Find start/end of the bento-grid section
START = '      <!-- ========== BENTO GRID (2-col) ========== -->' + NL + '      <div class="bento-grid">'
END_MARKER = '      </div>' + NL + '    </div>' + NL + NL + '    <!-- Sticky CTA Bar -->'

start_idx = content.find(START)
end_idx = content.find(END_MARKER, start_idx)

if start_idx == -1:
    print('ERROR: bento-grid START not found')
    exit(1)
if end_idx == -1:
    print('ERROR: END_MARKER not found')
    exit(1)

end_idx += len('      </div>' + NL + '    </div>')

print(f'Replacing chars {start_idx} to {end_idx}')

NEW_GRID = (
    '      <!-- ========== BENTO GRID (2-col) ========== -->' + NL +
    '      <div class="bento-grid">' + NL +
    NL +
    '        <!-- ROW 0: Services Provided (full width) -->' + NL +
    '        <div class="bento-card span-full">' + NL +
    '          <div class="card-header">' + NL +
    '            <h2 class="card-title">' + NL +
    '              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="card-icon card-icon--primary">' + NL +
    '                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />' + NL +
    '              </svg>' + NL +
    '              Services Provided' + NL +
    '            </h2>' + NL +
    '          </div>' + NL +
    '          <div id="servicesRows" class="card-content"></div>' + NL +
    '        </div>' + NL +
    NL +
    '        <!-- ROW 1: Trust & Safety (full width) -->' + NL +
    '        <div class="bento-card span-full" style="height: max-content;">' + NL +
    '          <div class="card-header">' + NL +
    '            <h2 class="card-title">' + NL +
    '              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="card-icon card-icon--success">' + NL +
    '                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />' + NL +
    '              </svg>' + NL +
    '              Trust &amp; Safety' + NL +
    '            </h2>' + NL +
    '          </div>' + NL +
    '          <div id="trustContent"></div>' + NL +
    '        </div>' + NL +
    NL +
    '        <!-- ROW 2: Certifications (left) | Industry Associations (right) -->' + NL +
    '        <div class="bento-card">' + NL +
    '          <div class="card-header">' + NL +
    '            <h2 class="card-title">' + NL +
    '              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="card-icon card-icon--star">' + NL +
    '                <path d="M12 15l-2.4 1.3.5-2.7-2-1.9 2.7-.4L12 9l1.2 2.3 2.7.4-2 1.9.5 2.7z"></path>' + NL +
    '                <circle cx="12" cy="12" r="10"></circle>' + NL +
    '              </svg>' + NL +
    '              Certifications &amp; Accreditations' + NL +
    '            </h2>' + NL +
    '          </div>' + NL +
    '          <div id="certificationsContent" class="card-list" style="margin-top: 20px"></div>' + NL +
    '        </div>' + NL +
    NL +
    '        <div class="bento-card">' + NL +
    '          <div class="card-header">' + NL +
    '            <h2 class="card-title">' + NL +
    '              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="card-icon card-icon--primary">' + NL +
    '                <circle cx="12" cy="12" r="10" />' + NL +
    '                <path d="M22 12h-4M6 12H2M12 22V2M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />' + NL +
    '              </svg>' + NL +
    '              Industry Associations' + NL +
    '            </h2>' + NL +
    '          </div>' + NL +
    '          <div id="associationsContent" class="logo-grid"></div>' + NL +
    '        </div>' + NL +
    NL +
    '        <!-- ROW 3: Compliance (left) | Documentation (right) -->' + NL +
    '        <div class="bento-card" style="height: max-content;">' + NL +
    '          <div class="card-header">' + NL +
    '            <h2 class="card-title">' + NL +
    '              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="card-icon card-icon--accent">' + NL +
    '                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />' + NL +
    '                <polyline points="14 2 14 8 20 8" />' + NL +
    '                <line x1="16" y1="13" x2="8" y2="13" />' + NL +
    '                <line x1="16" y1="17" x2="8" y2="17" />' + NL +
    '                <polyline points="10 9 9 9 8 9" />' + NL +
    '              </svg>' + NL +
    '              Compliance' + NL +
    '            </h2>' + NL +
    '          </div>' + NL +
    '          <div id="complianceContent"></div>' + NL +
    '        </div>' + NL +
    NL +
    '        <div class="bento-card" style="height: max-content;">' + NL +
    '          <div class="card-header">' + NL +
    '            <h2 class="card-title">' + NL +
    '              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="card-icon card-icon--accent">' + NL +
    '                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />' + NL +
    '              </svg>' + NL +
    '              Documentation' + NL +
    '            </h2>' + NL +
    '          </div>' + NL +
    '          <div id="documentsRows"></div>' + NL +
    '        </div>' + NL +
    NL +
    '      </div>' + NL +
    '    </div>'
)

new_content = content[:start_idx] + NEW_GRID + content[end_idx:]

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Bento grid rewritten successfully!')
print('Final order: Services Provided → Trust & Safety → Certs|Associations → Compliance|Documentation')
