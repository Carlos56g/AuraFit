# AuraFit – Fitness Tracking App

**AuraFit** is a cross-platform mobile app built with **Angular** and **Ionic** for tracking, managing, and analyzing running activities. Users can log runs, capture photos, rate their sessions, and view analytics.

---

## Features

* **Run Creation:** Add runs with time, distance, location, and photos (`AddRunComponent`)
* **Run Management:** View, edit, delete, and favorite runs (`HomePage`)
* **Analytics Dashboard:** Visual scoring and statistics (`SummaryComponent`)
* **User Authentication:** Email/password login and secure profiles (`AuthenticationService`)
* **Photo Integration:** Capture photos for runs (`PhotoService`)
* **Favorites:** Mark and filter favorite runs

---

## Tech Stack

* **Frontend:** Angular, Ionic, Capacitor
* **Backend & Services:** Firebase Authentication, Firestore, Cloud Storage
* **Dependencies:** `@ionic/angular`, `@angular/fire`, `@capacitor/camera`, `date-fns`

---

## Core Data Model

Runs include: `time`, `distance`, `location`, `date`, `personalRate`, `description`, `favorito`, `userId`, `fotoUrl`.

---

## Development Notes

* Modular Angular app with lazy-loaded routes
* Follows best practices: dependency injection, reactive programming, component-based design
* Key modules: Run Management, Analytics, Authentication, Forms

## Documentation
- [DeepWiki](https://deepwiki.com/Carlos56g/AuraFit)

## Photos
### Login Screen
<br>
<img src="https://github.com/user-attachments/assets/d0e2f9fa-b81a-44f5-9e49-2c32d57bd37a" width="300" style="margin-right:50px;">
<img src="https://github.com/user-attachments/assets/52229809-c459-4c74-98c2-ad314298cd80" width="300">

### Add a new Run
<br>
<img src="https://github.com/user-attachments/assets/eec3da53-6011-4551-b5b5-cedb7a14d8a8" width="300">

### Summary Section
<br>
<img src="https://github.com/user-attachments/assets/eac45aa1-4c59-4375-a831-3c565b01eb86" width="300" style="margin-right:50px;">
<img src="https://github.com/user-attachments/assets/d83081a8-69dd-4b17-9806-4c7fa96dba44" width="300">

### Profile Section
<br>
<img src="https://github.com/user-attachments/assets/c3b431d5-5486-44e7-ae05-050b3d700b57" width="300">
