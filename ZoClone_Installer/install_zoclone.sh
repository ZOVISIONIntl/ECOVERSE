#!/bin/bash
echo "🚀 Starting ZoClone Core + Interface Setup..."

# Step 1: Install Node.js dependencies
echo "📦 Installing Node.js packages..."
npm install express

# Step 2: Set up folders
echo "📁 Creating project directories..."
mkdir -p ZoClone_Project/Interface
mkdir -p ZoClone_Project/Core

# Step 3: Move core and interface files
echo "📂 Deploying files..."
unzip ZoClone_Core.zip -d ZoClone_Project/Core
unzip ZoClone_InterfaceScaffold.zip -d ZoClone_Project/Interface

# Step 4: Launch interface
echo "🌐 Launching Operator Interface on http://localhost:7777"
cd ZoClone_Project/Interface
node server.js
