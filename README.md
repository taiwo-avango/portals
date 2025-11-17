# GSI.Portals.Reference

Monorepo containing sample Static Web App demos and reference projects used by GSI Portals. This README explains how to run each sample, environment requirements, common troubleshooting steps, and notes about the npm registry configuration used in this workspace.

## Projects

1. Pick the project folder, e.g. `angular-swa`.
2. Start the dev server
- `angular-swa` — Angular sample (dev server: `npm run dev`, port: 4200)
- `vite-swa` — Vite-based sample (dev server: `npm run dev`, port: 5173)
- `next-swa` — Next.js / SWA sample (dev server: `npm run dev`, port: 3000)

There may be other sample folders; treat the three above as the primary entry points.

## Prerequisites

- Node: Use a supported Node.js version per-project. Known guidance:
  - Vite in this workspace requires Node >= 20.19.x or >= 22.12.x. Node 21 is not supported and will trigger runtime errors such as `TypeError: crypto.hash is not a function`.
  - Angular samples here were tested with Node 16/18/20 compatible toolchains, but use the project `package.json` engines where present.
- npm (or pnpm/yarn if your workflow uses them)
- Git Bash / WSL is available on Windows for convenience. Your default shell in this environment is `bash.exe`.

## npm registry & Artifactory

This workspace may be used in an environment where the user-level `~/.npmrc` points the default registry to an internal Artifactory (e.g. `https://mrartiemea.jfrog.io/...`). That causes npm to request every package from that registry. If a package is not present or proxied in Artifactory, installs fail with 404 or similar.

Recommended approaches when you need one package from Artifactory but the rest from public npm:

- If the internal package is scoped (e.g. `@myorg/mypkg`), add a project `.npmrc` with a per-scope registry:

```
registry=https://registry.npmjs.org/
@myorg:registry=https://mrartiemea.jfrog.io/artifactory/api/npm/xds-npm-local/
//mrartiemea.jfrog.io/artifactory/api/npm/xds-npm-local/:_authToken=${ARTIFACTORY_TOKEN}
```

- One-off install from Artifactory:

```bash
npm install @myorg/mypkg --registry=https://mrartiemea.jfrog.io/artifactory/api/npm/xds-npm-local/
```

- Avoid committing tokens to the repo. Use environment variables or CI secret stores for `_authToken` values.

## Troubleshooting

- crypto.hash error with Vite
  - Cause: Node 21 incompatible with Vite (WebCrypto API differences). Switch to Node 20.19.x or Node 22.12+.

- `nvm install` slow/failing
  - Cause: corporate proxy, firewall, or lack of curl/tar; try using a different network, run as an elevated user, or install Node manually.
  - Alternative tools: Volta (fast, single-command installs), Chocolatey (Windows installer), or the Node.js msi from nodejs.org.

- SSL errors when building native modules (e.g., `keytar`)
  - Might be caused by missing CA certs or corporate TLS interception. Workarounds (use cautiously):
    - Configure corporate CA in Git/Node or system certificate store.
    - Use `npm config set strict-ssl false` temporarily (not recommended for long term).

- When in doubt, run these diagnostic commands in the project folder and paste the output when asking for help:

```bash
node -v
npm -v
npm config get registry
npm config list --json
```

## Developer notes

- Don’t commit secrets (tokens) to the repo. Use environment variables or CI secret stores.
- If an app seems to build locally but fails in CI, compare Node versions and registry settings in CI.

## Contact / Next steps

If you want, I can:

- Switch Node versions for you in this environment and run `npm install` + `npm run dev` for a specific project; or
- Create per-project `.npmrc` files to force the public registry and scoped Artifactory access where needed.

Pick a project and say which Node version you want to use and I’ll run the steps and report back.
