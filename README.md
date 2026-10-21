# senior-saathi
A senior-friendly emergency, health and support platform for elderly citizens.
# Senior Saathi

**Senior Saathi** is a senior-friendly digital assistance platform designed to improve the safety, health, independence, and wellbeing of elderly citizens.

It combines emergency assistance, medicine reminders, family connectivity, location sharing, welfare information, and community support in one accessible platform.

---

## Problem Statement

Senior citizens, especially those living alone, may face several challenges:

- Delayed assistance during emergencies
- Missed medicines and doctor appointments
- Difficulty using complex mobile applications
- Limited awareness of government welfare schemes
- Social isolation and loneliness
- Difficulty contacting family during emergencies
- Limited support when internet connectivity is unavailable

Senior Saathi aims to address these challenges through a simple and elderly-friendly digital platform.

---

## Key Features

### One-Tap SOS

A simple SOS button allows senior citizens to quickly initiate an emergency alert.

### Location Sharing

During an SOS event, the system can share the user's location with authorized family members or caregivers.

### Medicine Reminders

Users can manage medicine information such as:

- Medicine name
- Dosage
- Time
- Frequency

### Appointment Reminders

Senior citizens can keep track of doctor visits, health check-ups, and follow-up appointments.

### Emergency Contacts

Users can store important family and caregiver contact information.

### Family Dashboard

A planned family dashboard will allow authorized family members to view selected alerts and senior-related information.

### Verified Volunteer Support

Future versions can connect users with verified volunteers for community-based assistance.

### Offline Emergency Support

SMS and calling-based fallback is planned for situations where internet connectivity is unavailable.

### Welfare Scheme Information

The platform aims to provide simplified information about relevant government welfare schemes for senior citizens.

### Accessible Interface

The application is designed around:

- Large buttons
- Simple navigation
- Easy-to-read text
- Hindi support
- Voice-friendly interaction

---

## Feature Status

Senior Saathi is currently in the **prototype and development stage**.

| Feature | Status |
|---|---|
| Senior-friendly user interface | Prototype |
| User profiles | Prototype |
| Medicine reminders | Prototype |
| Emergency contacts | Prototype |
| One-Tap SOS | Prototype |
| Location sharing | Prototype |
| Family dashboard | Planned |
| Verified volunteer support | Planned |
| SMS / Calling fallback | Planned |
| Welfare scheme guidance | Planned |
| Hindi / Voice assistance | Planned |
| AI-based fall detection | Future Scope |
| Smartwatch integration | Future Scope |
| Health sensor integration | Future Scope |

### Status Meaning

- **Implemented** – Complete and working in the current codebase
- **Prototype** – Basic demonstration or functionality is available
- **Planned** – Proposed feature not yet fully implemented
- **Future Scope** – Advanced feature intended for later versions

---

## Technology Stack

### Mobile Application

- Flutter
- Dart

### Backend

- Node.js
- Express.js
- REST API

### Database

- MongoDB

### Other Technologies

- GPS / Location Services
- Maps API
- SMS / Calling API
- Notification Services

---

## System Architecture

```text
Senior Citizen
      |
      v
Flutter Mobile Application
      |
      | REST API
      v
Node.js + Express Backend
      |
      v
MongoDB Database
      |
      +--------------------+----------------------+
      |                    |                      |
      v                    v                      v
Family/Caregiver    Verified Volunteer     Emergency Support
```

Detailed architecture documentation is available at:

`docs/ARCHITECTURE.md`

---

## SOS Workflow

```text
Senior presses SOS
        |
        v
Location captured
        |
        v
Emergency alert generated
        |
        v
Family / Caregiver notified
        |
        v
No response?
        |
       Yes
        |
        v
Verified Volunteer
        |
        v
Emergency Support
```

SMS or calling-based fallback is planned for situations where internet connectivity is unavailable.

---

## Repository Structure

```text
senior-saathi/
│
├── mobile-app/
│   ├── lib/
│   ├── assets/
│   ├── test/
│   └── pubspec.yaml
│
├── backend/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── tests/
│   └── package.json
│
├── docs/
│   ├── ARCHITECTURE.md
│   └── API_DOCUMENTATION.md
│
├── sample-data/
│   ├── users.json
│   ├── medicines.json
│   └── emergency_contacts.json
│
├── .env.example
├── .gitignore
├── LICENSE
└── README.md
```

---

## Installation and Setup

### Prerequisites

Install:

- Flutter SDK
- Dart SDK
- Node.js
- npm
- MongoDB
- Git
- Android Studio or VS Code

---

## Clone Repository

```bash
git clone https://github.com/Kapilpaji01/senior-saathi.git
cd senior-saathi
```

---

## Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file using `.env.example`.

Example:

```env
PORT=5000
NODE_ENV=development

MONGODB_URI=mongodb://localhost:27017/senior_saathi

JWT_SECRET=your_jwt_secret_here

SMS_API_KEY=your_sms_api_key_here

SMS_SENDER_ID=your_sender_id_here

MAPS_API_KEY=your_maps_api_key_here

NOTIFICATION_API_KEY=your_notification_api_key_here
```

Never upload real passwords or API keys to GitHub.

Start the backend:

```bash
npm start
```

For development:

```bash
npm run dev
```

---

## Flutter Application Setup

Navigate to the mobile application:

```bash
cd mobile-app
```

Install Flutter dependencies:

```bash
flutter pub get
```

Check devices:

```bash
flutter devices
```

Run:

```bash
flutter run
```

---

## Sample Data

Sample development data is available in:

```text
sample-data/
```

Available sample files include:

- `users.json`
- `medicines.json`
- `emergency_contacts.json`

All sample records are fictional and intended only for testing and demonstration.

---

## Testing

### Backend Tests

Navigate to:

```bash
cd backend
```

Run:

```bash
npm test
```

Current test files include:

```text
backend/tests/sos.test.js
backend/tests/medicine.test.js
```

Example test scenarios:

| Test | Expected Result |
|---|---|
| SOS contains valid user information | Test passes |
| SOS contains location | Test passes |
| Medicine has required fields | Test passes |
| Medicine time format is valid | Test passes |
| Medicine name is not empty | Test passes |

---

## API Overview

Planned API structure:

```text
POST   /api/auth/register
POST   /api/auth/login

GET    /api/users/profile

POST   /api/sos
GET    /api/sos/:id

GET    /api/medicines
POST   /api/medicines
PUT    /api/medicines/:id
DELETE /api/medicines/:id

GET    /api/emergency-contacts
POST   /api/emergency-contacts
```

Detailed API documentation:

`docs/API_DOCUMENTATION.md`

---

## Security and Privacy

Recommended security measures include:

- Password hashing
- JWT authentication
- Role-based access control
- Secure environment variables
- HTTPS in production
- User consent before location sharing
- Restricted access to health information
- Minimum collection of sensitive personal information

---

## UN Sustainable Development Goals

Senior Saathi aligns with:

### SDG 3 – Good Health and Well-being

Supports medication adherence, emergency assistance, reminders, and elderly wellbeing.

### SDG 10 – Reduced Inequalities

Promotes digital and social inclusion of elderly citizens.

### SDG 11 – Sustainable Cities and Communities

Supports safer and more inclusive communities for senior citizens.

---

## Expected Impact

Senior Saathi aims to:

- Improve emergency communication
- Reduce delays in requesting assistance
- Improve medicine adherence
- Improve family connectivity
- Increase awareness of welfare schemes
- Improve digital accessibility
- Reduce social isolation
- Support greater independence among senior citizens

---

## Future Scope

Future versions may include:

- AI-based fall detection
- Smartwatch integration
- Health sensor integration
- AI voice assistant
- Multilingual voice support
- Nearby hospital discovery
- Predictive health alerts
- Emergency analytics
- Integration with authorized healthcare organizations

---

## License

This project is licensed under the **MIT License**.

See the `LICENSE` file for details.

---

## Disclaimer

Senior Saathi is currently an educational and hackathon prototype.

It is not a replacement for professional medical advice, certified healthcare systems, ambulance services, or official emergency services.

Emergency-related functionality must undergo proper testing, validation, privacy review, and authorized integrations before real-world deployment.

---

## Project Vision

**Making technology simpler, safer, and more supportive for every senior citizen.**
