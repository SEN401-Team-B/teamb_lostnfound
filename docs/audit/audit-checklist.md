# Configuration Audit Checklist
## Functional Configuration Audit (FCA): does it do what it should?
- [ ] Every requirement maps to a passing test
- [ ] CI is green on the release candidate
- [ ] Every approved CR is implemented and verified
- [ ] Deviations/waivers are documented and approved

## Physical Configuration Audit (PCA): is it built from what we say?
- [ ] Every CI in `configuration-items.md` exists at its stated path
- [ ] The release tag points to the commit that was reviewed
- [ ] CHANGELOG matches the merged PRs
- [ ] LICENSE and README are present and current
- [ ] No untracked or unapproved files are in the release

## Mock audit result (TB-14)
| Check | Result | Notes |
|---|---|---|
| | | |
**Auditor:** M5 | **Date:** | **Outcome:** Pass / Conditional / Fail
