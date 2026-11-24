# Configuration Item Register
| CI ID | Name | Type | Location | Owner | Baseline |
|---|---|---|---|---|---|
| TB-CI-001 | SCMP | Document | docs/SCMP.md | M1 | v0.1.0 |
| TB-CI-002 | CR template & log | Document | docs/change-control/ | M2 | v0.1.0 |
| TB-CI-003 | Deviations register | Document | docs/deviations-waivers.md | M2 | v0.1.0 |
| TB-CI-004 | CI pipeline | Build script | .github/workflows/ci.yml | M3 | v0.2.0 |
| TB-CI-005 | Items module | Source | src/items.js | M4 | v0.2.0 |
| TB-CI-006 | HTTP server | Source | src/server.js | M4 | v0.2.0 |
| TB-CI-007 | Unit tests | Test | tests/ | M4 | v0.2.0 |
| TB-CI-008 | Audit checklist | Document | docs/audit/ | M5 | v0.2.0 |
| TB-CI-009 | Maintenance plan | Document | docs/maintenance/ | M5 | v0.2.0 |

## Naming conventions
- Branches: `feature/TB-<n>-desc`, `hotfix/TB-<n>-desc`
- Tags: `vMAJOR.MINOR.PATCH` (annotated)
- Commits: `TB-<n>: imperative summary`
