# Software Configuration Management Plan (SCMP)
**Project:** Team B Lost & Found (`teamb_lostnfound`) | **Jira key:** TB | **Version:** 0.1 (Draft)

## 1. Introduction
### 1.1 Purpose
This plan defines how Team B identifies, controls, records and audits configuration items (CIs) for the Lost & Found web application.
### 1.2 Scope
It covers source code, documentation, build scripts, CI workflows and releases stored in `SEN401-Team-B/teamb_lostnfound`.
### 1.3 References
IEEE Std 828-2012, SWEBOK v3 Ch. 6 (SCM), and Ch. 5 (Software Maintenance).

## 2. SCM Management
### 2.1 Organisational Context
Five-person student team. GitHub is the software library. Jira (project TB) tracks work and change requests.
### 2.2 Roles & Responsibilities
| Role | Responsibility |
|---|---|
| Configuration Manager (M1) | Owns SCMP, branch rules, baselines, releases |
| CCB Chair (M2) | Runs change control, approves/rejects CRs |
| Build/CI Engineer (M3) | Maintains CI pipeline and build integrity |
| Developer / Status Accountant (M4) | Implements changes, produces status reports |
| Auditor / Maintenance Lead (M5) | Runs FCA/PCA audits, maintenance planning |

**Change Control Board (CCB):** M1, M2, M5. Quorum is 2 members.
### 2.3 Constraints & Guidance
- `main` is protected. Changes only arrive through a reviewed PR that passes CI.
- Every commit, branch and PR references a Jira key (`TB-<n>`).
- Course deadlines and the PAU academic integrity policy apply.

## 3. SCM Activities
### 3.1 Configuration Identification
See `docs/configuration-items.md`. Naming: `TB-CI-<nnn>`. Versioning uses SemVer `MAJOR.MINOR.PATCH`.
### 3.2 Baselines
| Baseline | Tag | Contents |
|---|---|---|
| Planning | `v0.1.0` | SCMP, CI register, repo rules |
| Development | `v0.2.0` | CI pipeline, app skeleton, tests |
| Product | `v1.0.0` | Audited release |
### 3.3 Configuration Control
1. Raise a CR (GitHub issue template plus a Jira issue).
2. The CCB evaluates impact, cost and risk.
3. Approve, reject or defer the CR, and record the decision in `docs/change-control/CR-log.md`.
4. Implement on `feature/TB-<n>-desc`, then open a PR to `develop`.
5. Verify through CI and review, then merge. A release PR takes `develop` into `main`, which is then tagged.
### 3.4 Status Accounting
Status reports are generated from `git log`, tags, PRs and Jira. They are stored in `docs/status-accounting/`.
### 3.5 Audits
A Functional Configuration Audit (FCA) and a Physical Configuration Audit (PCA) are held before each product baseline, using `docs/audit/audit-checklist.md`.
### 3.6 Release Management
Releases use annotated tags and GitHub Releases, with notes in `CHANGELOG.md`.

## 4. Schedule
| Milestone | Target |
|---|---|
| SCMP draft (v0.1.0) | Week 4 |
| Repo/baselines | Week 5 |
| Change control live | Week 7–8 |
| Status report | Week 9 |
| Audit | Week 10 |

## 5. Resources
GitHub, GitHub Actions, Jira Software, Node.js 20.

## 6. SCMP Maintenance
The CCB reviews this plan at each baseline. Changes to it go through a CR.
