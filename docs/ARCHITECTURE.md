# Senior Saathi – Technical Architecture

## Overview

Senior Saathi is a senior-friendly digital assistance platform designed to improve the safety, health, independence and wellbeing of elderly citizens.

The system provides emergency support, medicine reminders, family connectivity, welfare information and community assistance.

## Technology Stack

- Flutter / Dart – Mobile Application
- Node.js / Express.js – Backend
- MongoDB – Database
- REST API – Communication
- GPS / Maps API – Location Services
- SMS / Calling API – Emergency Fallback
- Notification Services – Alerts and Reminders

## High-Level Architecture

```text
Senior Citizen
      |
      v
Flutter Mobile App
      |
      | REST API
      v
Node.js + Express Backend
      |
      v
MongoDB Database
      |
      +--------------------+--------------------+
      |                    |                    |
      v                    v                    v
Family/Caregiver     Verified Volunteer    Emergency Support
```

## Main Modules

### Senior Citizen App

- One-Tap SOS
- Medicine reminders
- Appointment reminders
- Emergency contacts
- Health records
- Welfare scheme information
- Location sharing
- Simple senior-friendly interface

### Backend

The Node.js backend handles:

- User authentication
- User profiles
- Emergency alerts
- Medicine records
- Emergency contacts
- Family connectivity
- Volunteer support
- Database communication

### Database

MongoDB stores:

- User profiles
- Medicine reminders
- Emergency contacts
- SOS records
- Health information
- Appointment information
- Volunteer information

## SOS Workflow

```text
Senior presses SOS
        |
        v
Location captured
        |
        v
SOS alert generated
        |
        v
Family/Caregiver notified
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

If internet connectivity is unavailable, SMS or calling-based emergency communication is planned as a fallback.

## User Roles

### Senior Citizen

- Send SOS alerts
- Manage medicines
- View appointments
- Access welfare information
- Manage emergency contacts

### Family / Caregiver

- Receive SOS alerts
- View authorized senior information
- Access emergency location
- Support medicine and appointment monitoring

### Verified Volunteer

- Receive eligible support requests
- Provide community assistance

### Administrator

- Manage users
- Verify volunteers
- Manage welfare information
- Monitor platform activity

## Security

Recommended security measures include:

- Password hashing
- JWT authentication
- Role-based access control
- Secure environment variables
- HTTPS for production
- User consent for location sharing
- Restricted health-data access

## Feature Status

Senior Saathi is currently in the prototype/development stage.

| Feature | Status |
|---|---|
| Senior-friendly interface | Prototype |
| One-Tap SOS | Prototype |
| Medicine reminders | Prototype |
| Emergency contacts | Prototype |
| Family dashboard | Planned |
| SMS/Calling fallback | Planned |
| Verified volunteer support | Planned |
| Hindi/Voice assistance | Planned |
| AI Fall Detection | Future Scope |
| Smartwatch Integration | Future Scope |

## Future Scope

- AI-based fall detection
- Smartwatch integration
- Health sensor integration
- AI voice assistant
- Multilingual voice support
- Nearby hospital discovery
- Predictive health alerts
