# Software Maintenance Plan
## Maintenance categories (ISO/IEC 14764)
| Type | Example for Lost & Found |
|---|---|
| Corrective | Fix search ignoring item location |
| Adaptive | Move from in-memory store to a database |
| Perfective | Add image upload for items |
| Preventive | Add input validation and more tests |

## Process
Request → CR (Jira TB) → CCB → Implement on branch → Test/CI → Release → Update CI register.

## Cost estimation (worked example)
Annual Change Traffic (ACT) = fraction of code changed per year. With 0.15 and an initial development effort of 2 person-months:
**AME = ACT × SDT = 0.15 × 2 = 0.3 person-months/year.**

## Measurement
- Mean time to resolve a CR
- Number of open vs closed CRs per sprint
- CI pass rate
- Test coverage

## Program comprehension, re-engineering & retirement
New members read the README, then the SCMP, then `src/items.js`, then the tests.
Re-engineering candidate: split `server.js` routes into modules. The project retires when the course ends, after a final archive tag.
