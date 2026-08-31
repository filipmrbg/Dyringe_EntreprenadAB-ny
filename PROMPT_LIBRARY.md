# Antigravity Prompt Library (All-in-One Website Onboarding SOP)

This is the standard operating procedure (SOP) and master prompt for configuring a client website demo in one single step.

## How to Use:
1. Copy the prompt block below.
2. Paste it into the chat, fill in the client details, and press Enter.

---

```text
Configure the entire website for this client demo based on the information provided below.

================ 1. CLIENT INFORMATION ================
Company Name: 

Location / Area: 

Phone: 

Email: 

Organization Number: 

Owner / CEO: 

Slogan (optional): 


================ 2. ALLABOLAG / RAW TEXT ================
[Paste raw text / company description here]


================ 3. LOGO & MEDIA ================
Logo URL: 

Hero Video/Image URL: 

About Us Image URL: 


================ 4. IMAGE GALLERY (4-6 IMAGES) ================
Gallery Image 1 URL: 

Gallery Image 2 URL: 

Gallery Image 3 URL: 

Gallery Image 4 URL: 

Gallery Image 5 URL (optional): 

Gallery Image 6 URL (optional): 


================ 5. SOCIAL MEDIA & INSTAGRAM ================
Instagram Profile URL: 

Facebook Page URL: 

Instagram Post 1 URL: 

Instagram Post 2 URL: 

Instagram Post 3 URL: 


================ RULES FOR AI ================
1. LANGUAGE & COPYWRITING (NATURAL SWEDISH):
   - Transform the raw/Allabolag text into modern, persuasive, and trustworthy Swedish craftsmanship copy (svenska). Avoid stiff, bureaucratic or legal phrasing.
   - STRICTLY AVOID UNNECESSARY HYPHENS (INGA BINDESTRECK): In Swedish, compound words must be written as a single solid word without hyphens. Hyphens make text look machine-translated and break mobile typography.
     * Write "Byggtjänster" (NEVER "Bygg-tjänster")
     * Write "Totalentreprenad" (NEVER "Total-entreprenad")
     * Write "Kvalitetsarbete" (NEVER "Kvalitets-arbete")
     * Write "Hantverkstjänster" (NEVER "Hantverks-tjänster")
     * Write "Trygghetsgaranti" (NEVER "Trygghets-garanti")
     * Use "Tak och fasad" or "Tak & fasad" instead of "Tak- och fasadrenovering".
     * Never split words with hyphens in headings, badges, or buttons.
2. NO AI CLUTTER & PRESERVE CLEAN MINIMALIST DESIGN:
   - STICK TO TEMPLATE LAYOUT: Do not invent, add, or inject any new UI elements, decorative sections, floating cards, or extra containers. Only update the text and media within the existing template components.
   - NO INVENTED BADGES OR PILLS: Do NOT add new floating badge tags, pill chips, or decorative marketing labels (e.g. no "✨ Bästa valet", "⚡ Snabb service", "🔥 Populär", "🏆 Premium").
   - ZERO EMOJIS: Never insert emojis in headings, titles, subheadings, bullet points, cards, or buttons.
3. LOGO: Ensure the logo in the header is transparent so it blends seamlessly into the navigation bar without a solid white background box.
4. LINK PREVIEW / OPEN GRAPH (CRITICAL FOR IMESSAGE, SMS & SOCIAL MEDIA):
   - When the site link is sent via SMS, iMessage, WhatsApp, Messenger, Facebook, LinkedIn, etc., the preview image MUST ALWAYS BE THE COMPANY LOGO.
   - Set <meta property="og:image"> and <meta name="twitter:image"> in index.html and all SEO meta tag helpers (e.g. usePageTitle.ts) to the FULL ABSOLUTE URL of the logo (must start with https://...). NEVER use relative paths like "/logo.png" as iMessage/SMS will show a blank/black square.
   - Set <meta name="twitter:card" content="summary_large_image" />.
   - Set <link rel="icon"> and <link rel="apple-touch-icon"> to the logo URL so mobile bookmarks and browser tabs display the logo.
   - Set preview title (og:title) to: [Company Name] | [Main Service] i [Location / Area]
   - Set preview description (og:description) to a persuasive 1-2 sentence Swedish summary of the company's services.
5. SERVICES & TEMPLATE CONSISTENCY: Keep the template's 4 core service cards and preset images intact. Seamlessly weave the new company name and operating location into service headings, descriptions, and FAQ items (in src/data/services.ts and throughout the site) so it feels completely local and customized.
6. REVIEWS / TESTIMONIALS: Generate 3 authentic, realistic Swedish customer reviews in Home.tsx localized to the company's operating city (with authentic Swedish names like Johan E., Karin M., Markus L.) and varied lengths matching their core services.
7. TEAM SETUP: Always configure the team in About.tsx with 3 members: The Owner/CEO as the lead person + 2 professional tradesmen/craftsmen.
8. PROJECTS GALLERY: For each gallery image provided in Section 4, generate a realistic, professional Swedish project title and category badge in the Projects section (e.g. "Totalrenovering Villa", "Tillbyggnad & Altan", "Tak och Fasad").
9. CONTACT & STRUCTURED DATA: Update all click-to-call (tel:) and email (mailto:) links across Navbar, Hero, Contact Page, and Footer. Update JSON-LD structured data (LocalBusiness schema) in index.html with the company name, city, phone, email, and logo URL.
10. SOCIAL & INSTAGRAM: If Instagram Post URLs are left blank below, hide the 3 embed cards and instead display a clean, modern "Follow us" banner.
11. CLEANUP: Remove any unused old logos, placeholder media, and unreferenced files from the project.
```
