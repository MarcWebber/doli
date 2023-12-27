@echo off

for /F %%i in ('git rev-parse --abbrev-ref HEAD') do set "current_branch=%%i"

if "%current_branch%"=="prod" (
  npm run lint:prettier
) else (
  echo not prod
)
