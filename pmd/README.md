# PMD Runner (Group 7)

This folder provides a dev tool, and cross-platform way to run PMD manually on a Java codebase using Docker. This is for developers' understanding only and not a necessity for the user. This module runs PMD inside Docker and outputs a JSON report. It is designed to work the same on macOS and Windows.

## Requirements
- Docker Desktop installed and running

## Folder structure
- `pmd/target-repo/` : place the Java codebase to analyze
- `pmd/config/ruleset.xml` : PMD ruleset configuration
- `pmd/out/` : PMD report output folder (generated)

## How to run

### 1) Put a Java project to scan into:
`pmd/target-repo/`

Example: copy any Java repo folder into `target-repo`.

### 2) Run PMD
From the `pmd/` folder:

```bash
cd pmd

docker compose run --rm pmd
```

### 3) Output
PMD writes a JSON report to:

`pmd/out/pmd-report.json`

## Notes
- PMD may print a warning about "Incremental Analysis"; this is normal and does not mean the run failed.
- PMD may exit with code `4` when violations are found. This is expected behavior (it still generates the report).

---
