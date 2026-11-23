# Contributing
1. Pick your Jira issue (`TB-<n>`) and move it to **In Progress**.
2. `git checkout develop && git pull`
3. `git checkout -b feature/TB-<n>-short-desc`
4. Commit with the key: `git commit -m "TB-<n>: what you did"`
5. `git push -u origin feature/TB-<n>-short-desc`
6. Open a PR into `develop`, get 1 review and wait for CI to pass, then merge.
7. Releases: a PR from `develop` into `main`, then the Configuration Manager tags `vX.Y.Z`.

Smart commits: `TB-5 #comment done #time 1h #done` (if enabled in Jira).
