@echo off
setlocal
cd /d "%~dp0"
title Radar Peluang - Laptop
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js belum terpasang atau belum terbaca.
  echo Pasang Node.js versi LTS dari https://nodejs.org/
  echo Setelah pemasangan, tutup jendela ini lalu klik MULAI-RADAR.cmd kembali.
  pause
  exit /b 1
)
if not exist "dist\index.html" (
  echo File aplikasi tidak ditemukan.
  echo Ekstrak seluruh isi ZIP terlebih dahulu. Jangan menjalankan dari dalam ZIP.
  pause
  exit /b 1
)
node "scripts\serve-local.mjs"
if errorlevel 1 (
  echo.
  echo Aplikasi berhenti karena kendala di atas.
  pause
)
