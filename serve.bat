@echo off
setlocal

if exist "C:\Ruby33-x64\bin\ruby.exe" set "PATH=C:\Ruby33-x64\bin;%PATH%"

where ruby >nul 2>&1
if errorlevel 1 (
  echo Ruby nao foi encontrado. Feche e abra o terminal novamente.
  exit /b 1
)

call bundle check >nul 2>&1
if errorlevel 1 call bundle install
if errorlevel 1 exit /b 1

call bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload

