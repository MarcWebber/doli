@echo off
@REM REM create new page
@REM REM usage new_page.bat [page_name]
IF "%1"=="" (
    echo usage: new_page.bat [page_name]
    exit /b
)

@REM get the first letter
set "FIRST_LETTER=%STRING:~0,1%"
for %%A in (%FIRST_LETTER%) do set "FIRST_LETTER_UPPERCASE=%%~A"

@REM to upper case
set "STRING=%FIRST_LETTER_UPPERCASE%%STRING:~1%"
set page_name=%STRING%
echo converted string is "%STRING%"

mkdir src\pages\%page_name%
mkdir src\pages\%page_name%\components
@REM REM create index.tsx
echo import React from 'react'; > src\pages\%page_name%\index.tsx

@REM REM write to /config/routes.ts
echo "{name:'%page_name%',icon:'smile',path:'/%page_name%',component:'./%page_name%'}">>config\routes.ts
