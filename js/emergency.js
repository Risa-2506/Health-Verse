// Emergency Features - Fall Detection and GPS Tracking

let fallDetectionActive = false;
let fallTimer = null;
let emergencyContacts = [];
let userLocation = null;
let geofenceRadius = 500; // meters
let safeZones = [];

// Fall Detection Simulation
function simulateFallDetection() {
    const fallTestBtn = document.getElementById('fall-test-btn');
    const imOkayBtn = document.getElementById('im-okay-btn');
    const statusDiv = document.getElementById('fall-status');
    
    // Disable test button and show "I'm Okay" button
    fallTestBtn.disabled = true;
    fallTestBtn.textContent = 'Fall Detected!';
    imOkayBtn.style.display = 'inline-block';
    
    // Show initial alert
    statusDiv.className = 'status-display danger';
    statusDiv.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        <strong>FALL DETECTED!</strong><br>
        Emergency services will be contacted in <span id="countdown">20</span> seconds.<br>
        Press "I'm Okay" if you don't need help.
    `;
    
    // Start countdown
    let countdown = 20;
    fallTimer = setInterval(() => {
        countdown--;
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.textContent = countdown;
        }
        
        if (countdown <= 0) {
            triggerEmergencyAlert();
        }
    }, 1000);
}

function cancelFallAlert() {
    const fallTestBtn = document.getElementById('fall-test-btn');
    const imOkayBtn = document.getElementById('im-okay-btn');
    const statusDiv = document.getElementById('fall-status');
    
    // Clear timer
    if (fallTimer) {
        clearInterval(fallTimer);
        fallTimer = null;
    }
    
    // Reset buttons
    fallTestBtn.disabled = false;
    fallTestBtn.textContent = 'Test Fall Detection';
    imOkayBtn.style.display = 'none';
    
    // Show success message
    statusDiv.className = 'status-display success';
    statusDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <strong>Alert Cancelled</strong><br>
        Glad you're okay! Fall detection is still active.
    `;
    
    // Clear message after 5 seconds
    setTimeout(() => {
        statusDiv.innerHTML = '';
        statusDiv.className = 'status-display';
    }, 5000);
}

function triggerEmergencyAlert() {
    const fallTestBtn = document.getElementById('fall-test-btn');
    const imOkayBtn = document.getElementById('im-okay-btn');
    const statusDiv = document.getElementById('fall-status');
    
    // Clear timer
    if (fallTimer) {
        clearInterval(fallTimer);
        fallTimer = null;
    }
    
    // Reset buttons
    fallTestBtn.disabled = false;
    fallTestBtn.textContent = 'Test Fall Detection';
    imOkayBtn.style.display = 'none';
    
    // Show emergency alert
    statusDiv.className = 'status-display danger';
    statusDiv.innerHTML = `
        <i class="fas fa-ambulance"></i>
        <strong>EMERGENCY ALERT SENT!</strong><br>
        • Emergency services contacted<br>
        • Caregivers notified<br>
        • GPS location shared<br>
        • Medical information sent
    `;
    
    // Simulate emergency actions
    notifyEmergencyServices();
    notifyEmergencyContacts();
    shareLocationWithFirstResponders();
}

// GPS Location Services
function getCurrentLocation() {
    const statusDiv = document.getElementById('location-status');
    
    statusDiv.className = 'status-display warning';
    statusDiv.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        Getting your location...
    `;
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                userLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                    timestamp: new Date().toISOString()
                };
                
                displayLocationSuccess(position);
                saveLocationToStorage();
            },
            function(error) {
                displayLocationError(error);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000
            }
        );
    } else {
        statusDiv.className = 'status-display danger';
        statusDiv.innerHTML = `
            <i class="fas fa-times-circle"></i>
            <strong>GPS Not Supported</strong><br>
            Your device doesn't support location services.
        `;
    }
}

function displayLocationSuccess(position) {
    const statusDiv = document.getElementById('location-status');
    
    statusDiv.className = 'status-display success';
    statusDiv.innerHTML = `
        <i class="fas fa-map-marker-alt"></i>
        <strong>Location Found!</strong><br>
        Lat: ${position.coords.latitude.toFixed(6)}<br>
        Lng: ${position.coords.longitude.toFixed(6)}<br>
        Accuracy: ±${Math.round(position.coords.accuracy)}m<br>
        <button onclick="shareLocation()" class="demo-btn" style="margin-top: 10px;">
            Share with Caregivers
        </button>
    `;
}

function displayLocationError(error) {
    const statusDiv = document.getElementById('location-status');
    let message = '';
    
    switch(error.code) {
        case error.PERMISSION_DENIED:
            message = "Location access denied by user.";
            break;
        case error.POSITION_UNAVAILABLE:
            message = "Location information unavailable.";
            break;
        case error.TIMEOUT:
            message = "Location request timed out.";
            break;
        default:
            message = "An unknown error occurred.";
            break;
    }
    
    statusDiv.className = 'status-display danger';
    statusDiv.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        <strong>Location Error</strong><br>
        ${message}<br>
        <button onclick="getCurrentLocation()" class="demo-btn" style="margin-top: 10px;">
            Try Again
        </button>
    `;
}

function shareLocation() {
    if (!userLocation) {
        alert('Please get your location first.');
        return;
    }
    
    const message = `My current location: https://maps.google.com/?q=${userLocation.latitude},${userLocation.longitude}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Location',
            text: 'I am sharing my current location with you.',
            url: `https://maps.google.com/?q=${userLocation.latitude},${userLocation.longitude}`
        });
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(message).then(() => {
            alert('Location link copied to clipboard! You can now share it with your caregivers.');
        });
    }
}

// Emergency Services Functions
function notifyEmergencyServices() {
    console.log('🚨 EMERGENCY ALERT: Contacting emergency services...');
    
    const emergencyData = {
        type: 'fall_detection',
        timestamp: new Date().toISOString(),
        location: userLocation,
        patientInfo: getUserMedicalInfo(),
        severity: 'high',
        autoDetected: true
    };
    
    // In a real app, this would send data to emergency services API
    console.log('Emergency data sent:', emergencyData);
    
    // Simulate contacting nearby hospitals
    contactNearbyHospitals(emergencyData);
}

function notifyEmergencyContacts() {
    const contacts = getEmergencyContacts();
    
    contacts.forEach(contact => {
        console.log(`📱 Notifying emergency contact: ${contact.name} - ${contact.phone}`);
        
        // In a real app, this would send SMS/call
        const message = `EMERGENCY ALERT: Fall detected for ${getUserName()}. Location: ${userLocation ? 'GPS coordinates shared' : 'Location unavailable'}. Please check on them immediately.`;
        
        // Simulate sending message
        console.log(`Message to ${contact.name}: ${message}`);
    });
}

function shareLocationWithFirstResponders() {
    if (!userLocation) return;
    
    const locationData = {
        coordinates: userLocation,
        address: 'Getting address...', // In real app, reverse geocode
        landmarks: 'Nearby landmarks...', // In real app, identify landmarks
        accessInstructions: getUserAccessInstructions()
    };
    
    console.log('📍 Location shared with first responders:', locationData);
}

function contactNearbyHospitals(emergencyData) {
    const hospitals = [
        {
            name: 'City General Hospital',
            distance: '2.3 km',
            phone: '(555) 911-1000',
            specialties: ['Emergency', 'Trauma', 'Geriatrics']
        },
        {
            name: "St. Mary's Medical Center",
            distance: '3.1 km',
            phone: '(555) 911-2000',
            specialties: ['Emergency', 'Cardiology', 'Neurology']
        },
        {
            name: 'Regional Medical Center',
            distance: '4.7 km',
            phone: '(555) 911-3000',
            specialties: ['Emergency', 'Orthopedics', 'Senior Care']
        }
    ];
    
    hospitals.forEach(hospital => {
        console.log(`🏥 Alerting ${hospital.name} (${hospital.distance})`);
        console.log(`   Phone: ${hospital.phone}`);
        console.log(`   Specialties: ${hospital.specialties.join(', ')}`);
    });
}

// Geofencing Functions
function setupGeofence(centerLat, centerLng, radiusMeters, zoneName = 'Safe Zone') {
    const safeZone = {
        id: Date.now().toString(),
        name: zoneName,
        center: { lat: centerLat, lng: centerLng },
        radius: radiusMeters,
        created: new Date().toISOString(),
        active: true
    };
    
    safeZones.push(safeZone);
    localStorage.setItem('safeZones', JSON.stringify(safeZones));
    
    console.log(`✅ Safe zone "${zoneName}" created:`, safeZone);
    return safeZone;
}

function checkGeofence(currentLat, currentLng) {
    if (safeZones.length === 0) return { inSafeZone: true, message: 'No safe zones defined' };
    
    for (const zone of safeZones) {
        if (!zone.active) continue;
        
        const distance = calculateDistance(
            currentLat, currentLng,
            zone.center.lat, zone.center.lng
        );
        
        if (distance <= zone.radius) {
            return {
                inSafeZone: true,
                zone: zone,
                distance: distance,
                message: `Inside safe zone: ${zone.name}`
            };
        }
    }
    
    return {
        inSafeZone: false,
        message: 'Outside all safe zones',
        nearestZone: findNearestSafeZone(currentLat, currentLng)
    };
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = lat1 * Math.PI/180;
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lng2-lng1) * Math.PI/180;
    
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    return R * c; // Distance in meters
}

function findNearestSafeZone(currentLat, currentLng) {
    if (safeZones.length === 0) return null;
    
    let nearest = null;
    let minDistance = Infinity;
    
    safeZones.forEach(zone => {
        if (!zone.active) return;
        
        const distance = calculateDistance(
            currentLat, currentLng,
            zone.center.lat, zone.center.lng
        );
        
        if (distance < minDistance) {
            minDistance = distance;
            nearest = { ...zone, distance };
        }
    });
    
    return nearest;
}

// Continuous Location Monitoring
let locationWatchId = null;

function startLocationMonitoring() {
    if (!navigator.geolocation) {
        console.error('Geolocation not supported');
        return;
    }
    
    locationWatchId = navigator.geolocation.watchPosition(
        function(position) {
            userLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy,
                timestamp: new Date().toISOString()
            };
            
            // Check geofence
            const geofenceStatus = checkGeofence(
                position.coords.latitude,
                position.coords.longitude
            );
            
            if (!geofenceStatus.inSafeZone) {
                handleGeofenceViolation(geofenceStatus);
            }
            
            saveLocationToStorage();
        },
        function(error) {
            console.error('Location monitoring error:', error);
        },
        {
            enableHighAccuracy: true,
            timeout: 60000,
            maximumAge: 30000
        }
    );
}

function stopLocationMonitoring() {
    if (locationWatchId) {
        navigator.geolocation.clearWatch(locationWatchId);
        locationWatchId = null;
    }
}

function handleGeofenceViolation(status) {
    console.log('⚠️ Geofence violation detected:', status);
    
    // Notify caregivers
    const contacts = getEmergencyContacts();
    const message = `ALERT: ${getUserName()} has left their safe zone. ${status.message}. Current location being shared.`;
    
    contacts.forEach(contact => {
        console.log(`📱 Geofence alert sent to ${contact.name}: ${message}`);
    });
}

// Utility Functions
function getUserName() {
    return localStorage.getItem('userName') || 'User';
}

function getUserMedicalInfo() {
    return JSON.parse(localStorage.getItem('medicalInfo') || '{}');
}

function getUserAccessInstructions() {
    return localStorage.getItem('accessInstructions') || 'Standard home access';
}

function getEmergencyContacts() {
    return JSON.parse(localStorage.getItem('emergencyContacts') || '[]');
}

function saveLocationToStorage() {
    if (userLocation) {
        localStorage.setItem('lastKnownLocation', JSON.stringify(userLocation));
    }
}

function loadLocationFromStorage() {
    const stored = localStorage.getItem('lastKnownLocation');
    if (stored) {
        userLocation = JSON.parse(stored);
    }
}

// Device Motion Detection (for fall detection)
let motionThreshold = 25; // m/s²
let isMotionDetectionActive = false;

function startMotionDetection() {
    if (!window.DeviceMotionEvent) {
        console.log('Device motion not supported');
        return;
    }
    
    isMotionDetectionActive = true;
    
    window.addEventListener('devicemotion', function(event) {
        if (!isMotionDetectionActive) return;
        
        const acceleration = event.accelerationIncludingGravity;
        if (!acceleration) return;
        
        const totalAcceleration = Math.sqrt(
            acceleration.x * acceleration.x +
            acceleration.y * acceleration.y +
            acceleration.z * acceleration.z
        );
        
        // Detect sudden acceleration changes (potential fall)
        if (totalAcceleration > motionThreshold) {
            console.log('Potential fall detected by motion sensor');
            simulateFallDetection();
        }
    });
}

function stopMotionDetection() {
    isMotionDetectionActive = false;
}

// Initialize Emergency System
function initializeEmergencySystem() {
    loadLocationFromStorage();
    
    // Load saved safe zones
    const savedZones = localStorage.getItem('safeZones');
    if (savedZones) {
        safeZones = JSON.parse(savedZones);
    }
    
    // Start location monitoring if permission granted
    if (navigator.permissions) {
        navigator.permissions.query({name: 'geolocation'}).then(function(result) {
            if (result.state === 'granted') {
                startLocationMonitoring();
            }
        });
    }
    
    console.log('🚨 Emergency system initialized');
}

// Auto-initialize when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEmergencySystem);
} else {
    initializeEmergencySystem();
}