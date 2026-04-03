window.DOCS_DATA = {
  groups: [
    {
      title: 'Getting Started',
      pages: [
        { id: 'index', label: 'Introduction' },
        { id: 'installation', label: 'Installation' },
        { id: 'quick-start', label: 'Quick Start' }
      ]
    },
    {
      title: 'Reference',
      pages: [
        { id: 'commands', label: 'Commands' },
        { id: 'permissions', label: 'Permissions' },
        { id: 'configuration', label: 'Configuration' },
        { id: 'placeholders', label: 'Placeholders' },
        { id: 'faq', label: 'FAQ' }
      ]
    }
  ],
  pages: {
    index: {
      title: 'YourPlugin Docs',
      topbarTitle: 'YourPlugin Docs',
      meta: ['Getting Started', 'Home'],
      content: `
        <div class="page-badge">Production-ready template · GitBook-style docs</div>
        <h1>YourPlugin documentation template for real server owners</h1>
        <p class="lead">This template is split into maintainable files and includes realistic sample content for a Minecraft plugin documentation website.</p>
        <div class="hero-grid">
          <article class="card"><div class="card-label">Audience</div><h3>Server owners & staff teams</h3><p>Clear setup guides, command references, and config examples your users can copy directly.</p></article>
          <article class="card"><div class="card-label">Maintenance</div><h3>Organized by page and feature</h3><p>Update one page at a time instead of editing one huge HTML file.</p></article>
        </div>
        <section id="overview"><h2>Overview</h2><p>YourPlugin is an example moderation + utility plugin focused on simple onboarding and clear command behavior.</p></section>
        <section id="features"><h2>Core features</h2><div class="feature-grid"><div class="feature"><div class="feature-badge">✓</div><div><strong>Moderation tools</strong><span>Warn, mute, and temporary punishments with audit logging.</span></div></div><div class="feature"><div class="feature-badge">✓</div><div><strong>Reward crates</strong><span>Crate keys, weighted rewards, and GUI preview support.</span></div></div><div class="feature"><div class="feature-badge">✓</div><div><strong>PlaceholderAPI support</strong><span>Display player and server stats in scoreboards.</span></div></div><div class="feature"><div class="feature-badge">✓</div><div><strong>Hot-reload safe config</strong><span>Reload docs-friendly YAML with clear comments.</span></div></div></div></section>
      `,
      prev: { id: 'faq', title: 'FAQ', desc: 'Review common support questions.' },
      next: { id: 'installation', title: 'Installation', desc: 'Install on Paper or Purpur.' }
    },
    installation: {
      title: 'Installation · YourPlugin Docs',
      topbarTitle: 'Installation',
      meta: ['Getting Started', 'Setup'],
      content: `
        <h1>Installation</h1>
        <p class="lead">Follow this guide to install YourPlugin on a Paper 1.20.6+ server in under 5 minutes.</p>
        <section id="requirements"><h2>Requirements</h2><ul><li>Java 21+</li><li>Paper or Purpur 1.20.6+</li><li>LuckPerms (recommended)</li><li>PlaceholderAPI (optional)</li></ul></section>
        <section id="steps"><h2>Install steps</h2><ol><li>Download <span class="inline-code">YourPlugin-x.y.z.jar</span>.</li><li>Move it to <span class="inline-code">/plugins</span>.</li><li>Start server once to generate config.</li><li>Edit config files and restart.</li></ol><div class="code-block"><div class="code-head">Linux shell</div><pre>cd /home/mc/server/plugins
curl -L -o YourPlugin.jar https://example.com/YourPlugin.jar
cd ..
./start.sh</pre></div></section>
        <section id="verify"><h2>Verify plugin boot</h2><p>On successful startup, you should see a log similar to:</p><div class="code-block"><div class="code-head">Server console</div><pre>[YourPlugin] Loading configuration...
[YourPlugin] Connected to data storage: SQLITE
[YourPlugin] Registered 14 commands and 19 permissions.
[YourPlugin] Plugin enabled successfully.</pre></div></section>
      `,
      prev: { id: 'index', title: 'Introduction', desc: 'Return to docs overview.' },
      next: { id: 'quick-start', title: 'Quick Start', desc: 'Configure first features quickly.' }
    },
    'quick-start': {
      title: 'Quick Start · YourPlugin Docs',
      topbarTitle: 'Quick Start',
      meta: ['Getting Started', 'Quick Start'],
      content: `
        <h1>Quick Start</h1>
        <p class="lead">Set up your first moderation and reward flow with copy/paste examples.</p>
        <section id="first-config"><h2>First configuration</h2><div class="code-block"><div class="code-head">plugins/YourPlugin/config.yml</div><pre>storage:
  type: sqlite
  file: data.db

moderation:
  warn-expiration-days: 30
  mute-default-duration: 15m

rewards:
  daily-crate-enabled: true
  key-command: "crate key give {player} daily 1"</pre></div></section>
        <section id="first-commands"><h2>First commands to run</h2><ul><li><span class="inline-code">/yp reload</span> after editing config.</li><li><span class="inline-code">/yp warn Notch Spamming chat</span> for a test warning.</li><li><span class="inline-code">/yp crate preview daily</span> to check reward UI.</li></ul></section>
      `,
      prev: { id: 'installation', title: 'Installation', desc: 'Return to setup steps.' },
      next: { id: 'commands', title: 'Commands', desc: 'Full command reference.' }
    },
    commands: {
      title: 'Commands · YourPlugin Docs',
      topbarTitle: 'Commands',
      meta: ['Reference', 'Commands'],
      content: `
        <h1>Commands</h1>
        <p class="lead">All built-in commands for admins, moderators, and players.</p>
        <section id="admin-commands"><h2>Admin commands</h2><div class="table-wrap"><table><thead><tr><th>Command</th><th>Description</th><th>Permission</th></tr></thead><tbody><tr><td><strong>/yp reload</strong></td><td>Reloads all plugin configs.</td><td>yourplugin.admin.reload</td></tr><tr><td><strong>/yp debug on</strong></td><td>Enables debug logging output.</td><td>yourplugin.admin.debug</td></tr><tr><td><strong>/yp migrate</strong></td><td>Migrates data to configured backend.</td><td>yourplugin.admin.migrate</td></tr></tbody></table></div></section>
        <section id="moderation-commands"><h2>Moderation commands</h2><div class="table-wrap"><table><thead><tr><th>Command</th><th>Description</th><th>Permission</th></tr></thead><tbody><tr><td><strong>/yp warn &lt;player&gt; &lt;reason&gt;</strong></td><td>Creates a warning entry.</td><td>yourplugin.mod.warn</td></tr><tr><td><strong>/yp mute &lt;player&gt; [time]</strong></td><td>Mutes player chat.</td><td>yourplugin.mod.mute</td></tr><tr><td><strong>/yp history &lt;player&gt;</strong></td><td>Shows moderation history.</td><td>yourplugin.mod.history</td></tr></tbody></table></div></section>
      `,
      prev: { id: 'quick-start', title: 'Quick Start', desc: 'Back to starter workflow.' },
      next: { id: 'permissions', title: 'Permissions', desc: 'Permission node details.' }
    },
    permissions: {
      title: 'Permissions · YourPlugin Docs',
      topbarTitle: 'Permissions',
      meta: ['Reference', 'Permissions'],
      content: `
        <h1>Permissions</h1><p class="lead">Assign roles confidently using this permission map.</p>
        <section id="permission-groups"><h2>Permission groups</h2><div class="cards-grid"><article class="card"><div class="card-label">Admin</div><h3>Full access</h3><p><span class="inline-code">yourplugin.*</span></p></article><article class="card"><div class="card-label">Moderator</div><h3>Punishment commands</h3><p><span class="inline-code">yourplugin.mod.*</span></p></article><article class="card"><div class="card-label">Helper</div><h3>Read-only tools</h3><p><span class="inline-code">yourplugin.mod.history</span></p></article><article class="card"><div class="card-label">Player</div><h3>User commands</h3><p><span class="inline-code">yourplugin.user.*</span></p></article></div></section>
      `,
      prev: { id: 'commands', title: 'Commands', desc: 'Back to command syntax.' },
      next: { id: 'configuration', title: 'Configuration', desc: 'YAML reference and examples.' }
    },
    configuration: {
      title: 'Configuration · YourPlugin Docs',
      topbarTitle: 'Configuration',
      meta: ['Reference', 'Configuration'],
      content: `
        <h1>Configuration</h1>
        <p class="lead">Detailed guide for tuning behavior, storage, and messages.</p>
        <section id="main-config"><h2>Main config</h2><div class="code-block"><div class="code-head">plugins/YourPlugin/config.yml</div><pre>storage:
  type: mysql
  host: localhost
  port: 3306
  database: yourplugin
  username: mc
  password: change-me

chat-filter:
  enabled: true
  blocked-words:
    - badword1
    - badword2</pre></div></section>
        <section id="messages"><h2>Messages</h2><p>Edit <span class="inline-code">messages.yml</span> with MiniMessage formatting.</p><div class="code-block"><div class="code-head">messages.yml</div><pre>prefix: "&lt;#4f8cff&gt;&lt;b&gt;YourPlugin&lt;/b&gt;&lt;/#4f8cff&gt;"
warned: "{prefix} &lt;yellow&gt;You warned &lt;red&gt;{player}&lt;/red&gt;.&lt;/yellow&gt;"
no-permission: "{prefix} &lt;red&gt;You don't have permission.&lt;/red&gt;"</pre></div></section>
      `,
      prev: { id: 'permissions', title: 'Permissions', desc: 'Back to permission nodes.' },
      next: { id: 'placeholders', title: 'Placeholders', desc: 'PlaceholderAPI reference.' }
    },
    placeholders: {
      title: 'Placeholders · YourPlugin Docs',
      topbarTitle: 'Placeholders',
      meta: ['Reference', 'PlaceholderAPI'],
      content: `
        <h1>Placeholders</h1>
        <p class="lead">Use these placeholders in scoreboards, chat, and GUI lore.</p>
        <section id="player-placeholders"><h2>Player placeholders</h2><div class="table-wrap"><table><thead><tr><th>Placeholder</th><th>Example Output</th></tr></thead><tbody><tr><td><strong>%yourplugin_warnings%</strong></td><td>2</td></tr><tr><td><strong>%yourplugin_mute_remaining%</strong></td><td>8m 43s</td></tr><tr><td><strong>%yourplugin_rank%</strong></td><td>Veteran</td></tr></tbody></table></div></section>
        <section id="server-placeholders"><h2>Server placeholders</h2><div class="table-wrap"><table><thead><tr><th>Placeholder</th><th>Example Output</th></tr></thead><tbody><tr><td><strong>%yourplugin_online_staff%</strong></td><td>3</td></tr><tr><td><strong>%yourplugin_active_mutes%</strong></td><td>5</td></tr></tbody></table></div></section>
      `,
      prev: { id: 'configuration', title: 'Configuration', desc: 'Back to config reference.' },
      next: { id: 'faq', title: 'FAQ', desc: 'Common setup and troubleshooting.' }
    },
    faq: {
      title: 'FAQ · YourPlugin Docs',
      topbarTitle: 'FAQ',
      meta: ['Reference', 'Troubleshooting'],
      content: `
        <h1>FAQ</h1>
        <p class="lead">Answers to the most common install and runtime issues.</p>
        <section id="common-issues"><h2>Common issues</h2><div class="faq-card"><h3>The plugin says “missing dependency PlaceholderAPI”</h3><p>Install PlaceholderAPI and restart. Soft-depend placeholders will not load until dependency is available.</p></div><div class="faq-card"><h3>Commands return no-permission even for op users</h3><p>Check LuckPerms context and inherited groups. OP alone may be disabled if your server config enforces permission plugins.</p></div><div class="faq-card"><h3>How do I deploy docs to GitHub Pages automatically?</h3><p>This template ships with a GitHub Actions workflow in <span class="inline-code">.github/workflows/deploy-pages.yml</span> that publishes on every push to <span class="inline-code">main</span>.</p></div></section>
      `,
      prev: { id: 'placeholders', title: 'Placeholders', desc: 'Back to PlaceholderAPI list.' },
      next: { id: 'index', title: 'Introduction', desc: 'Return to docs homepage.' }
    }
  }
};
