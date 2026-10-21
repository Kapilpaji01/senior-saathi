# Senior Saathi – API Documentation

## Overview

This document describes the proposed REST API structure for the Senior Saathi platform.

Senior Saathi is currently in the prototype/development stage. Some endpoints may be partially implemented or planned for future development.

Base URL for local development:

```text
http://localhost:5000/api
```

---

## Authentication

Authentication is designed using JWT-based access tokens.

For protected routes, send the token in the request header:

```text
Authorization: Bearer <token>
```

---

# 1. Authentication APIs

## Register User

**Endpoint**

```text
POST /api/auth/register
```

### Request Body

```json
{
  "name": "Ramesh Sharma",
  "email": "ramesh@example.com",
  "password": "securePassword123",
  "role": "senior",
  "phone": "9999999999"
}
```

### Expected Response

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

---

## Login User

**Endpoint**

```text
POST /api/auth/login
```

### Request Body

```json
{
  "email": "ramesh@example.com",
  "password": "securePassword123"
}
```

### Expected Response

```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "SEN001",
    "name": "Ramesh Sharma",
    "role": "senior"
  }
}
```

---

# 2. User Profile APIs

## Get User Profile

**Endpoint**

```text
GET /api/users/profile
```

### Authentication

Required

### Expected Response

```json
{
  "id": "SEN001",
  "name": "Ramesh Sharma",
  "age": 68,
  "city": "Bhopal",
  "bloodGroup": "B+",
  "preferredLanguage": "Hindi"
}
```

---

## Update User Profile

**Endpoint**

```text
PUT /api/users/profile
```

### Request Body

```json
{
  "age": 69,
  "city": "Bhopal",
  "preferredLanguage": "Hindi"
}
```

### Expected Response

```json
{
  "success": true,
  "message": "Profile updated successfully"
}
```

---

# 3. SOS APIs

## Create SOS Alert

**Endpoint**

```text
POST /api/sos
```

### Request Body

```json
{
  "userId": "SEN001",
  "latitude": 23.2599,
  "longitude": 77.4126,
  "message": "Emergency assistance required"
}
```

### Expected Response

```json
{
  "success": true,
  "message": "SOS alert generated",
  "sosId": "SOS001"
}
```

---

## Get SOS Alert

**Endpoint**

```text
GET /api/sos/:id
```

### Example

```text
GET /api/sos/SOS001
```

### Expected Response

```json
{
  "id": "SOS001",
  "userId": "SEN001",
  "status": "active",
  "latitude": 23.2599,
  "longitude": 77.4126,
  "createdAt": "2026-10-22T10:00:00Z"
}
```

---

## Update SOS Status

**Endpoint**

```text
PUT /api/sos/:id/status
```

### Request Body

```json
{
  "status": "resolved"
}
```

### Expected Response

```json
{
  "success": true,
  "message": "SOS status updated"
}
```

---

# 4. Medicine APIs

## Get Medicines

**Endpoint**

```text
GET /api/medicines
```

### Expected Response

```json
[
  {
    "id": "MED001",
    "userId": "SEN001",
    "name": "Demo Medicine",
    "dosage": "1 Tablet",
    "time": "20:00",
    "frequency": "Daily"
  }
]
```

---

## Add Medicine

**Endpoint**

```text
POST /api/medicines
```

### Request Body

```json
{
  "userId": "SEN001",
  "name": "Demo Medicine",
  "dosage": "1 Tablet",
  "time": "20:00",
  "frequency": "Daily"
}
```

### Expected Response

```json
{
  "success": true,
  "message": "Medicine added successfully"
}
```

---

## Update Medicine

**Endpoint**

```text
PUT /api/medicines/:id
```

### Request Body

```json
{
  "dosage": "2 Tablets",
  "time": "21:00"
}
```

### Expected Response

```json
{
  "success": true,
  "message": "Medicine updated successfully"
}
```

---

## Delete Medicine

**Endpoint**

```text
DELETE /api/medicines/:id
```

### Expected Response

```json
{
  "success": true,
  "message": "Medicine deleted successfully"
}
```

---

# 5. Emergency Contact APIs

## Get Emergency Contacts

**Endpoint**

```text
GET /api/emergency-contacts
```

### Expected Response

```json
[
  {
    "id": "EC001",
    "userId": "SEN001",
    "name": "Amit Sharma",
    "relation": "Son",
    "phone": "9888888888",
    "priority": 1
  }
]
```

---

## Add Emergency Contact

**Endpoint**

```text
POST /api/emergency-contacts
```

### Request Body

```json
{
  "userId": "SEN001",
  "name": "Amit Sharma",
  "relation": "Son",
  "phone": "9888888888",
  "priority": 1
}
```

### Expected Response

```json
{
  "success": true,
  "message": "Emergency contact added"
}
```

---

## Delete Emergency Contact

**Endpoint**

```text
DELETE /api/emergency-contacts/:id
```

### Expected Response

```json
{
  "success": true,
  "message": "Emergency contact deleted"
}
```

---

# 6. Appointment APIs

## Get Appointments

**Endpoint**

```text
GET /api/appointments
```

### Expected Response

```json
[
  {
    "id": "APT001",
    "userId": "SEN001",
    "doctorName": "Dr. Example",
    "date": "2026-11-05",
    "time": "11:00",
    "type": "Routine Check-up"
  }
]
```

---

## Add Appointment

**Endpoint**

```text
POST /api/appointments
```

### Request Body

```json
{
  "userId": "SEN001",
  "doctorName": "Dr. Example",
  "date": "2026-11-05",
  "time": "11:00",
  "type": "Routine Check-up"
}
```

---

# 7. Health Record APIs

## Get Health Record

**Endpoint**

```text
GET /api/health-records/:userId
```

### Expected Response

```json
{
  "userId": "SEN001",
  "bloodGroup": "B+",
  "medicalConditions": [
    "Hypertension"
  ],
  "allergies": [
    "None"
  ]
}
```

---

# 8. Welfare Scheme APIs

## Get Welfare Schemes

**Endpoint**

```text
GET /api/schemes
```

### Expected Response

```json
[
  {
    "id": "SCH001",
    "name": "Sample Senior Citizen Scheme",
    "description": "Example scheme information for demonstration purposes.",
    "eligibility": "Eligibility criteria to be verified from official sources."
  }
]
```

Welfare scheme information should be verified from official government sources before production use.

---

# 9. Volunteer Support APIs

Volunteer support is currently a planned feature.

## Request Volunteer Support

**Planned Endpoint**

```text
POST /api/volunteer/request
```

### Example Request

```json
{
  "userId": "SEN001",
  "requestType": "Emergency Assistance",
  "latitude": 23.2599,
  "longitude": 77.4126
}
```

---

# 10. Emergency Escalation Flow

The proposed emergency flow is:

```text
Senior Citizen
      |
      v
SOS Alert
      |
      v
Family / Caregiver
      |
      v
No Response
      |
      v
Verified Volunteer
      |
      v
Emergency Support
```

SMS and calling fallback are planned for cases where internet connectivity is unavailable.

---

# HTTP Status Codes

| Status Code | Meaning |
|---|---|
| 200 | Request successful |
| 201 | Resource created successfully |
| 400 | Invalid request |
| 401 | Authentication required |
| 403 | Access denied |
| 404 | Resource not found |
| 409 | Resource already exists |
| 500 | Internal server error |

---

# Standard Error Response

Example:

```json
{
  "success": false,
  "message": "Invalid request"
}
```

---

# Security Considerations

The production version should include:

- Password hashing using bcrypt or equivalent
- JWT authentication
- Role-based authorization
- HTTPS
- Request validation
- Rate limiting
- Secure storage of API credentials
- User consent for location sharing
- Restricted access to health data
- Logging without exposing sensitive information

---

# Environment Variables

The backend may require the following variables:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SMS_API_KEY=your_sms_api_key
SMS_SENDER_ID=your_sender_id
MAPS_API_KEY=your_maps_api_key
NOTIFICATION_API_KEY=your_notification_api_key
```

Actual secrets must never be committed to the public GitHub repository.

---

# Development Status

Senior Saathi is currently a hackathon prototype.

Some API endpoints in this document describe the intended architecture and may not yet be fully implemented.

The documentation will be updated as features move from:

**Planned → Prototype → Implemented**

---

# API Version

```text
Version: 1.0 Prototype
```

# Project

**Senior Saathi – Elderly Care, Emergency & Health Support Platform**
