filepath = r'c:\Users\admin-beats\OneDrive\xo Vibe Coding xo\exchange-profile-repo\exchange-profile\index.html'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Detect line ending
crlf = '\r\n' in content
NL = '\r\n' if crlf else '\n'

START_MARKER = '        <div style="display: flex; flex-direction: column; gap: 16px">'
END_MARKER = '        </div>' + NL + '      </div>' + NL + '    </div>'

start_idx = content.find(START_MARKER)
end_idx = content.find(END_MARKER, start_idx)

if start_idx == -1:
    print('START marker not found')
    exit(1)

if end_idx == -1:
    print('END marker not found')
    exit(1)

end_idx += len(END_MARKER)
print(f'Replacing characters {start_idx} to {end_idx}')
print('Snippet being replaced:')
print(repr(content[start_idx:end_idx]))

replacement = (
    '        <!-- ROW 2: Trust & Safety (full width) -->' + NL +
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
    '        <!-- ROW 3: Documentation (left) | Compliance (right) -->' + NL +
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
    '      </div>' + NL +
    '    </div>'
)

new_content = content[:start_idx] + replacement + content[end_idx:]

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Done! Layout updated successfully.')
