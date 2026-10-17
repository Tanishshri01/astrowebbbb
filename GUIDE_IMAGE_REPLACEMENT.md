# Guide: How to Replace Photos in Astro Kannada (GitHub & Code)

This guide explains how to easily replace any photo on the website (including Pandit Sachin Sharma's portrait, Lord Krishna, and all Vedic services) directly through GitHub or locally in code.

---

## 1. Where Photos Are Stored

All photos are organized cleanly in the `public/images/` directory:

| Photo | Exact File Path in Repo | Description |
| :--- | :--- | :--- |
| **Pandit Sachin Sharma** | `public/images/pandit_sachin_sharma.jpg` | Main astrologer portrait in top hero card |
| **Lord Sri Krishna** | `public/images/krishna_darshan.jpg` | Lord Krishna darshan altar section |
| **Lakshmi Vashikaran** | `public/images/goddess_lakshmi.jpg` | Wealth & prosperity service |
| **Love & Relationships** | `public/images/radha_krishna.jpg` | Couple harmony service |
| **Dhana & Business** | `public/images/lord_kubera.jpg` | Trade and finance service |
| **Education & Studies** | `public/images/goddess_saraswati.jpg` | Vidya & exams service |
| **Career & Job** | `public/images/lord_surya.jpg` | Career promotion service |
| **Financial Problems** | `public/images/lord_ganesha.jpg` | Obstacle removal service |
| **Enemy Troubles & Protection** | `public/images/protection_hanuman.jpg` | Hanuman protection service |
| **Family Peace** | `public/images/lord_shiva.jpg` | Domestic harmony service |
| **Homa & Yajna** | `public/images/vedic_yajna.jpg` | Vedic havan ritual service |
| **Poster 1** | `public/images/poster_1.jpg` | Side-by-side Special Poster 1 |
| **Poster 2** | `public/images/poster_2.jpg` | Side-by-side Special Poster 2 |
| **Poster 3** | `public/images/poster_3.jpg` | Side-by-side Special Poster 3 |
| **Poster 4** | `public/images/poster_4.jpg` | Side-by-side Special Poster 4 |

---

## 2. How to Replace Photos on GitHub (No Code or Terminal Required)

This is the easiest and fastest way:

1. Open your repository on **GitHub.com**.
2. Click on the **`public`** folder, then click on the **`images`** folder.
3. Prepare your replacement image on your phone or computer and name it exactly:
   - **`pandit_sachin_sharma.jpg`** (for Pandit ji's portrait)
   - Or the matching service file name from the table above.
4. On GitHub inside `public/images/`, click **Add file** (top-right) ➔ select **Upload files**.
5. Drag and drop your new `pandit_sachin_sharma.jpg` file into the box.
6. Scroll down to **Commit changes**, leave it set to "Commit directly to the `main` branch", and click **Commit changes**.
7. Done! Your website will automatically rebuild and display the new photo.

---

## 3. How to Replace Photos Using Git in VS Code or Terminal

If you have cloned the project to your computer:

1. Copy your new photo file into the project folder at:
   `public/images/pandit_sachin_sharma.jpg`
   *(Replacing the existing file)*
2. In your terminal, run:
   ```bash
   git add public/images/pandit_sachin_sharma.jpg
   git commit -m "Update Pandit Sachin Sharma portrait photo"
   git push origin main
   ```
3. Your deployment service (Vercel, GitHub Pages, or Cloud Run) will automatically update.

---

## 4. How to Use a Different File Name or Format (PNG / WebP) in Code

If you want to use a different file name (e.g. `IMG_8781.jpg` or `pandit_sachin.png`):

1. Put your image in `public/images/IMG_8781.jpg`.
2. Open file **`src/utils/serviceImages.ts`**.
3. Near line 75, change:
   ```typescript
   export const PANDIT_SACHIN_SHARMA_IMAGE = '/images/IMG_8781.jpg';
   ```
4. Save the file and push to GitHub.

---

## 5. Optimal Image Dimensions for Best Appearance

- **Pandit Ji Portrait**: Vertical portrait format with ratio `4:5` (e.g. `800 x 1000 px` or `1080 x 1350 px`) or square (`1000 x 1000 px`). The frame is centered and fitted with subtle gold border accents.
- **Service Photos**: Landscape or square format (e.g. `800 x 600 px` or `1000 x 800 px`).
- **File Format**: `.jpg`, `.jpeg`, `.png`, or `.webp`.
