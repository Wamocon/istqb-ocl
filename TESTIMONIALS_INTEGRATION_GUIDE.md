# 📸 Testimonials Integration Guide
## So fügst du echte Bilder und Videos hinzu

---

## 📁 Dateistruktur

Erstelle folgende Ordnerstruktur im `public` Verzeichnis:

```
public/
├── images/
│   └── testimonials/
│       ├── leon-christen.jpg
│       ├── christian-oliver-friedrich.jpg
│       ├── natalie-thumbnail.jpg
│       ├── artur-thumbnail.jpg
│       ├── alexander-thumbnail.jpg
│       ├── olga-thumbnail.jpg
│       └── jonathan-thumbnail.jpg
└── videos/
    └── testimonials/
        ├── natalie.mp4
        ├── artur.mp4
        ├── alexander.mp4
        ├── olga.mp4
        └── jonathan.mp4
```

---

## 🖼️ Success Stories Bilder

### Bildanforderungen:

- **Format:** JPG oder WebP
- **Auflösung:** Mindestens 800x800px (1:1 Verhältnis empfohlen)
- **Dateigröße:** < 500KB (optimiert mit TinyPNG oder Squoosh)
- **Inhalt:** Professionelles Porträt oder Businessfoto

### Bilder hinzufügen:

1. **Bilder in den richtigen Ordner kopieren:**
   ```
   public/images/testimonials/leon-christen.jpg
   public/images/testimonials/christian-oliver-friedrich.jpg
   ```

2. **Next.js Image Component verwenden:**

Öffne `components/sections/SuccessStories.tsx` und ersetze die Placeholder-Sektion:

**Aktuell (Zeile 69-85):**
```tsx
{/* Placeholder for image - replace with actual Image component when images available */}
<div className="absolute inset-0 flex items-center justify-center">
  <div className="text-center">
    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
      <User className="w-12 h-12 text-accent" aria-hidden="true" />
    </div>
    <h3 className="text-2xl font-bold text-foreground">{story.name}</h3>
    {story.role && (
      <p className="text-accent font-semibold mt-2">{story.role}</p>
    )}
  </div>
</div>
```

**Ersetzen mit:**
```tsx
import Image from 'next/image'

{/* Real image */}
<Image
  src={story.image}
  alt={`${story.name} - ${story.role}`}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={index === 0} // Erstes Bild wird priorisiert geladen
/>

{/* Overlay mit Gradient */}
<div className="absolute inset-0 bg-gradient-to-t from-background-card/80 via-transparent to-transparent" />

{/* Name und Rolle über dem Bild */}
<div className="absolute bottom-20 left-0 right-0 text-center px-4">
  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{story.name}</h3>
  {story.role && (
    <p className="text-accent font-semibold mt-2 drop-shadow-md">{story.role}</p>
  )}
</div>
```

---

## 🎥 Video Testimonials

### Video-Anforderungen:

- **Format:** MP4 (H.264 codec)
- **Auflösung:** 1920x1080 (Full HD) oder 1280x720 (HD)
- **Dateigröße:** < 50MB pro Video (komprimiert mit HandBrake)
- **Länge:** 30-90 Sekunden
- **Qualität:** Gute Beleuchtung, klarer Ton
- **Inhalt:**
  - Vorstellung (Name, vorheriger Status)
  - Problem (was war die Herausforderung?)
  - Lösung (wie hat der Kurs geholfen?)
  - Ergebnis (was ist jetzt anders?)

### Videos hinzufügen:

1. **Videos in den richtigen Ordner kopieren:**
   ```
   public/videos/testimonials/natalie.mp4
   public/videos/testimonials/artur.mp4
   etc.
   ```

2. **Thumbnails erstellen:**
   - Frame aus Video extrahieren oder Screenshot machen
   - Als JPG speichern in `public/images/testimonials/`

3. **Video Player aktivieren:**

Öffne `components/sections/VideoTestimonials.tsx` und aktualisiere die Thumbnail-Anzeige:

**Zeile 145-159 ersetzen mit:**
```tsx
import Image from 'next/image'

{/* Real thumbnail */}
<Image
  src={testimonial.thumbnailUrl}
  alt={`${testimonial.name} Video Thumbnail`}
  fill
  className="object-cover"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

**Zeile 234-249 (Video Element) aktualisieren:**
```tsx
{/* Remove 'hidden' class and show real video */}
<video
  ref={videoRef}
  className="w-full h-full"
  src={video.videoUrl}
  onPlay={() => setIsPlaying(true)}
  onPause={() => setIsPlaying(false)}
  onEnded={() => setIsPlaying(false)}
  controls={false} // Wir verwenden custom controls
/>
```

**Zeile 234-249 (Placeholder entfernen):**
```tsx
{/* REMOVE this entire placeholder div when videos are ready */}
```

---

## 🚀 Alternative: YouTube/Vimeo Integration

Wenn du Videos auf YouTube oder Vimeo hostest:

### YouTube Integration:

1. **Video hochladen** auf YouTube
2. **Embed-Link kopieren:** `https://www.youtube.com/embed/VIDEO_ID`

3. **In `data/videoTestimonials.ts` ändern:**
```typescript
{
  id: 'natalie',
  name: 'Natalie',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Ersetze mit echter ID
  // ...
}
```

4. **In `VideoTestimonials.tsx` iframe verwenden:**
```tsx
{video.videoUrl?.includes('youtube') || video.videoUrl?.includes('vimeo') ? (
  <iframe
    src={video.videoUrl}
    className="w-full h-full"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
) : (
  <video ref={videoRef} src={video.videoUrl} className="w-full h-full" />
)}
```

---

## 🎨 Bildoptimierung Best Practices

### Tools für Bildkomprimierung:
- **TinyPNG** (https://tinypng.com/) - Verlustfreie Komprimierung
- **Squoosh** (https://squoosh.app/) - Google's Bild-Optimizer
- **ImageOptim** (Mac) - Batch-Verarbeitung

### Next.js Bild-Optimierung:
Next.js optimiert Bilder automatisch, aber du kannst helfen:

```tsx
<Image
  src="/images/testimonials/leon-christen.jpg"
  alt="Leon Christen"
  width={800}
  height={800}
  quality={85} // 85 ist ein guter Kompromiss
  placeholder="blur" // Zeigt verschwommenes Bild während des Ladens
  blurDataURL="data:image/jpeg;base64,..." // Generiert mit plaiceholder
/>
```

### Automatische Blur Placeholder generieren:
```bash
npm install plaiceholder
```

Dann in einem Script:
```javascript
import { getPlaiceholder } from 'plaiceholder'

const { base64 } = await getPlaiceholder('/images/testimonials/leon-christen.jpg')
```

---

## 📊 Video-Komprimierung

### HandBrake Settings (empfohlen):
1. **Preset:** "Web" → "Discord Nitro Large 3-6 Minutes 1080p30"
2. **Video Codec:** H.264
3. **Framerate:** 30fps (constant)
4. **Quality:** RF 23 (guter Kompromiss)
5. **Audio:** AAC, 128kbps, Stereo

### FFmpeg Kommandozeile:
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -vf scale=1920:1080 output.mp4
```

---

## 🔄 Datenmigration Checkliste

### Success Stories:
- [ ] Leon Christen Foto (800x800px, <500KB)
- [ ] Christian-Oliver Friedrich Foto (800x800px, <500KB)
- [ ] Bilder in `public/images/testimonials/` kopieren
- [ ] `SuccessStories.tsx` aktualisieren (Image Component)
- [ ] Testen auf Desktop & Mobile

### Video Testimonials:
- [ ] Natalie Video (30-90s, <50MB)
- [ ] Artur Video (30-90s, <50MB)
- [ ] Alexander Video (30-90s, <50MB)
- [ ] Olga Video (30-90s, <50MB)
- [ ] Jonathan Video (30-90s, <50MB)
- [ ] Thumbnails für alle Videos erstellen
- [ ] Videos in `public/videos/testimonials/` kopieren
- [ ] Thumbnails in `public/images/testimonials/` kopieren
- [ ] `VideoTestimonials.tsx` aktualisieren
- [ ] Video Player testen (Play, Pause, Mute, Fullscreen)

---

## 🎬 Video Aufnahme Tipps

### Equipment:
- **Kamera:** Smartphone (iPhone/Samsung) reicht aus
- **Mikrofon:** Externes Lavalier-Mikrofon empfohlen (z.B. Rode SmartLav+)
- **Beleuchtung:** Natürliches Licht von vorne oder Ring Light
- **Hintergrund:** Ruhig, professionell, keine Ablenkungen

### Setup:
1. **Position:** Kamera auf Augenhöhe
2. **Framing:** Oberkörper sichtbar, Kopf nicht am Rand
3. **Beleuchtung:** Von vorne, keine Schatten im Gesicht
4. **Ton-Check:** Testaufnahme machen, Hintergrundgeräusche minimieren

### Interview-Leitfaden:
```
1. Vorstellung (5s)
   "Hallo, ich bin [Name] und ich arbeite als [Rolle]"

2. Situation vorher (10s)
   "Vor dem Kurs war meine größte Herausforderung..."

3. Warum dieser Kurs? (10s)
   "Ich habe mich für WAMOCON Academy entschieden, weil..."

4. Erfahrung (20s)
   "Besonders hilfreich war..."
   "DiTeLe hat mir geholfen..."

5. Ergebnis (10s)
   "Jetzt habe ich..."
   "Mein Tipp an andere: ..."

6. Call-to-Action (5s)
   "Ich kann den Kurs jedem empfehlen, der..."
```

---

## 🧪 Testing Checkliste

Nach dem Hinzufügen echter Inhalte:

### Success Stories:
- [ ] Bilder laden korrekt auf Desktop
- [ ] Bilder laden korrekt auf Mobile
- [ ] Lazy Loading funktioniert
- [ ] Alt-Texte sind vorhanden
- [ ] Layout bleibt responsive
- [ ] Stats-Overlay ist lesbar

### Video Testimonials:
- [ ] Thumbnails laden schnell
- [ ] Play-Button funktioniert
- [ ] Video öffnet sich im Modal
- [ ] Video spielt ab (mit Ton)
- [ ] Pause-Button funktioniert
- [ ] Mute-Button funktioniert
- [ ] Fullscreen funktioniert
- [ ] Modal schließt mit X und Escape
- [ ] Mobile: Video funktioniert
- [ ] Mobile: Controls sind bedienbar

### Performance:
- [ ] Lighthouse Score > 90 (Performance)
- [ ] Bilder sind optimiert (<500KB)
- [ ] Videos sind komprimiert (<50MB)
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] CLS (Cumulative Layout Shift) < 0.1

---

## 🆘 Troubleshooting

### "Image failed to load"
- **Ursache:** Falscher Pfad oder Datei nicht vorhanden
- **Lösung:** Prüfe, ob Datei in `public/images/testimonials/` liegt
- **Tipp:** Pfad ist case-sensitive (leon-christen.jpg ≠ Leon-Christen.jpg)

### "Video doesn't play"
- **Ursache:** Falsches Format oder Codec
- **Lösung:** Verwende H.264 codec (MP4)
- **Tool:** HandBrake zum Re-encoding

### "Images are blurry"
- **Ursache:** Zu stark komprimiert oder zu kleine Auflösung
- **Lösung:** Minimum 800x800px, Quality 85+

### "Videos are too large"
- **Ursache:** Nicht komprimiert
- **Lösung:** HandBrake mit RF 23 Setting verwenden

---

## 📞 Support

Bei Fragen zur Integration:
1. Prüfe diese Anleitung
2. Schaue in die Komponenten-Kommentare
3. Teste Schritt für Schritt

**Viel Erfolg beim Hinzufügen deiner echten Testimonials! 🎉**
