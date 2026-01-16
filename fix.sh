#!/bin/bash

# =============================================================================
# KoliBri Migration Script
# =============================================================================
# Konsolidiertes Script zur automatischen Migration der KoliBri-Komponenten.
# Entfernt veraltete Komponenten, Themes und aktualisiert Referenzen.
# =============================================================================

set -e  # Exit on error

echo "🔄 Starting KoliBri migration..."
echo ""

# =============================================================================
# 1. REMOVE DEPRECATED COMPONENTS & THEMES
# =============================================================================
echo "1️⃣  Removing deprecated components and themes..."

rm -rf src/components/button-group
rm -rf src/components/indented-text
rm -rf src/components/link-group

# =============================================================================
# 2. CLEAN UP ROUTES & REFERENCES
# =============================================================================
echo "2️⃣  Cleaning up routes and references..."

node -e "
const fs = require('fs');
const routesFile = 'src/shares/routes.ts';
const themeFile = 'src/shares/theme.ts';
const mainFile = 'src/react.main.tsx';

// Clean routes.ts
let routesContent = fs.readFileSync(routesFile, 'utf-8');
routesContent = routesContent.replace(/import \{.*?BUTTON_GROUP_ROUTES.*?\} from.*?button-group.*?;\n/g, '');
routesContent = routesContent.replace(/import \{.*?LINK_GROUP_ROUTES.*?\} from.*?link-group.*?;\n/g, '');
routesContent = routesContent.replace(/import \{.*?INDENTED_ROUTES.*?\} from.*?indented-text.*?;\n/g, '');
routesContent = routesContent.replace(/\s*\.\.\.BUTTON_GROUP_ROUTES,\n/g, '');
routesContent = routesContent.replace(/\s*\.\.\.LINK_GROUP_ROUTES,\n/g, '');
routesContent = routesContent.replace(/\s*\.\.\.INDENTED_ROUTES,\n/g, '');
fs.writeFileSync(routesFile, routesContent);

// Clean main file
let mainContent = fs.readFileSync(mainFile, 'utf-8');
mainContent = mainContent.replace(/import \{([^}]*?)(BWSt|ITZBund)[^}]*?\} from/g, (match) => {
  return match.replace(/, (BWSt|ITZBund)/g, '').replace(/(BWSt|ITZBund), /g, '');
});
mainContent = mainContent.replace(/\[DEFAULT, ECL_EC, ECL_EU, (ITZBund, BWSt|BWSt, ITZBund)\]/g, '[DEFAULT, ECL_EC, ECL_EU]');
fs.writeFileSync(mainFile, mainContent);

// Clean theme file - remove entire theme objects for BWSt and ITZBund
let themeContent = fs.readFileSync(themeFile, 'utf-8');
// Remove BWSt theme object
themeContent = themeContent.replace(/\s*\{\s*label:\s*['\"]BWSt[^}]*?\},?\n/gs, '');
// Remove ITZBund theme object
themeContent = themeContent.replace(/\s*\{\s*label:\s*['\"].*?Informationstechnikzentrum[^}]*?\},?\n/gs, '');
// Clean up any empty array references or duplicates
themeContent = themeContent.replace(/,\s*\]/g, '\n]');
fs.writeFileSync(themeFile, themeContent);

console.log('✓ Routes and references cleaned');
"

# Clean up handout examples
sed -i '' '/{\/\* <KolButtonGroup/d' src/components/handout/basic.tsx
sed -i '' '/{\/\* <KolLinkGroup/d' src/components/handout/basic.tsx
sed -i '' '/{\/\* <KolIndentedText/d' src/components/handout/basic.tsx

# =============================================================================
# 3. ADD KOLICONS STYLESHEET
# =============================================================================
echo "3️⃣  Adding KolIcons stylesheet..."

sed -i '' 's|<link rel="stylesheet" href="/assets/icofont/icofont.min.css" />|<link rel="stylesheet" href="/assets/icofont/icofont.min.css" />\n\t<link rel="stylesheet" href="/assets/kolicons/style.css" />|' index.html

# =============================================================================
# 4. FORMAT CODE
# =============================================================================
echo "4️⃣  Formatting code with Prettier..."

pnpm format -w

# =============================================================================
# DONE
# =============================================================================
echo ""
echo "✅ Migration completed successfully!"
echo ""
echo "📝 Changes made:"
echo "  • Removed ButtonGroup, IndentedText, LinkGroup components"
echo "  • Removed BWSt and ITZBund themes"
echo "  • Cleaned up route definitions"
echo "  • Added KolIcons stylesheet to index.html"
echo "  • Formatted all code with Prettier"
