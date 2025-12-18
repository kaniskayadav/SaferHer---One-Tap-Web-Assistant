# SafeHer – One Tap Emergency Web Assistant

SafeHer is a mobile‑first, web‑based safety assistant that helps women trigger help in seconds during emergencies.  
It removes the need to download heavy apps and focuses on speed, simplicity, hands‑free use, and real‑world safety.

---

## 🚩 Problem

Women often face unsafe or unpredictable situations, especially while travelling or commuting alone.

In real emergencies:

- Unlocking the phone and searching for an app takes too long.  
- Most safety apps require download, login, and multiple steps.  
- Heavy apps are slow and may fail on low‑end devices.  
- Network issues and panic reduce reaction time.  

There is a need for a lightweight, always‑available, one‑tap (and even hands‑free) safety solution.

---

## ✅ Solution – SafeHer

SafeHer is a one‑tap emergency web assistant that runs directly in the browser.  
No installation, no signup – just open the link, tap the SOS button, or say **“help”** to trigger voice‑based SOS.

The project is built as a 4‑phase safety system with an additional voice layer on top.

### Phase 1 – One‑Tap SOS

- Big emergency button on the home screen.  
- Sends an instant WhatsApp alert with live location to trusted contacts.  
- Optionally triggers an emergency call (112/100).

### Phase 1.1 – Voice‑Activated SOS (New)

- Dedicated **“Voice Mode”** button on the home screen.  
- Uses the Web Speech API to continuously listen for trigger words like _“help”_, _“bachao”_, _“save me”_, or _“SOS”_.  
- On detection, it automatically activates the same SOS flow as the main button, giving a hands‑free emergency option.

### Phase 2 – Safety Score Map

- Uses the browser Geolocation API to detect the user’s position.  
- Embeds a map view around the user.  
- Shows a basic safety score to indicate how safe the current area is.

### Phase 3 – Offline Mesh SOS (Concept Simulation)

- Simulates an offline “mesh network” where nearby users are alerted.  
- Demonstrates how future device‑to‑device relays could send SOS even with poor internet.

### Phase 4 – Police Auto‑Dispatch Dashboard (Simulation)

- Simple dashboard that shows a case ID, assigned police station, ETA, and response statistics.  
- Intended as a prototype for integrating with real police or city safety systems in the future.

---

## ✨ Key Features

- One‑tap SOS from a clean, distraction‑free home screen.  
- **Voice‑activated SOS** using simple spoken commands.  
- WhatsApp‑based alerts with a direct Google Maps location link.  
- Safety map view with score and current location.  
- Simulated offline mesh alerts for nearby users.  
- Simple police response view with ETA and basic analytics.  
- Mobile‑first, responsive design with app‑like experience.  
- Works directly in the browser – no downloads needed.

---

## 🛠 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript  
- **APIs:** Browser Geolocation API, Web Speech API, Google Maps Embed  
- **Design:** Mobile‑first layout, gradient UI, and soft glassmorphism styling  

---

## 🚀 How to Run

1. Download or clone this repository.  
2. Open `index.html` in any modern browser (Chrome recommended).  
3. Allow **location access** and **microphone access** when prompted.  
4. Test the main actions:
   - `SEND SOS NOW`  
   - `Voice Mode` (say _"help"_ / _"bachao"_)  
   - `Safety Map`  
   - `Offline SOS`  
   - `Police Help`  

---

## 🔮 Future Improvements

- Real offline mesh using Bluetooth / Wi‑Fi Direct.  
- Secure backend for storing user profiles and trusted contacts.  
- Integration with official police / city safety APIs.  
- AI‑based risk scoring using time, location, and behavioural patterns.  
- PWA support to add SafeHer to the home screen like a native app.  
- Multi‑language voice commands for better accessibility.

---

## 👩‍💻 Author

Built by **Kaniska Yadav** as part of a women’s safety hackathon project.  
Focused on **SDG 5 – Gender Equality** and safer mobility for women.

Built by **Kaniska Yadav** as part of a women’s safety hackathon project.  
Focused on **SDG 5 – Gender Equality** and safer mobility for women.
Built by **Kaniska Yadav** as part of a women’s safety hackathon project.  
Focused on **SDG 5 – Gender Equality** and safer mobility for women.

