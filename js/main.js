// Main JavaScript file for HealthCare+ App

// Global state management
const AppState = {
    currentUser: null,
    currentUserType: null,
    currentSection: 'home'
};

// Navigation functions
function showHome() {
    hideAllSections();
    document.getElementById('home-section').classList.add('active');
    updateNavigation('home');
    AppState.currentSection = 'home';
}

function showDoctors() {
    hideAllSections();
    document.getElementById('doctors-section').classList.add('active');
    updateNavigation('doctors');
    AppState.currentSection = 'doctors';
}

function showHomeRemedies() {
    hideAllSections();
    document.getElementById('remedies-section').classList.add('active');
    updateNavigation('remedies');
    AppState.currentSection = 'remedies';
    
    // Initialize remedies if not already done
    if (document.getElementById('remedies-container').innerHTML === '') {
        renderRemedies();
    }
}

function showEmergencyFeatures() {
    hideAllSections();
    document.getElementById('emergency-section').classList.add('active');
    updateNavigation('emergency');
    AppState.currentSection = 'emergency';
}

function hideAllSections() {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
}

function updateNavigation(activeSection) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Update active nav link if exists
    const activeLink = document.querySelector(`.nav-link[data-section="${activeSection}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Modal functions
function showUserTypeModal(defaultType = null) {
    const modal = document.getElementById('user-type-modal');
    modal.classList.add('active');
    
    if (defaultType) {
        // If a default type is specified, automatically go to auth
        setTimeout(() => {
            hideUserTypeModal();
            showAuth(defaultType);
        }, 100);
    }
}

function hideUserTypeModal() {
    const modal = document.getElementById('user-type-modal');
    modal.classList.remove('active');
}

// Authentication and user management
function showAuth(userType) {
    hideUserTypeModal();
    
    // Create auth modal
    const authModal = createAuthModal(userType);
    document.body.appendChild(authModal);
}

function createAuthModal(userType) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'auth-modal';
    
    const userTypeInfo = {
        elderly: {
            title: 'Elderly User Portal',
            icon: 'fas fa-users',
            description: 'Access your health tracking, memories, and wellness management tools.'
        },
        alzheimer: {
            title: 'Alzheimer Patient Portal',
            icon: 'fas fa-brain',
            description: 'Memory aids, task tracking, and daily assistance tools to help you stay organized.'
        },
        caregiver: {
            title: 'Caregiver Portal',
            icon: 'fas fa-shield-alt',
            description: 'Monitor patients, set safety zones, and receive emergency alerts.'
        }
    };
    
    const info = userTypeInfo[userType];
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <div class="modal-header">
                <h3><i class="${info.icon}"></i> ${info.title}</h3>
                <button onclick="this.closest('.modal').remove()" class="close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div style="text-align: center; margin-bottom: 30px;">
                <p>${info.description}</p>
            </div>
            
            <div id="auth-tabs" style="display: flex; margin-bottom: 20px;">
                <button onclick="showLoginForm('${userType}')" class="auth-tab active" id="login-tab">
                    Sign In
                </button>
                <button onclick="showSignupForm('${userType}')" class="auth-tab" id="signup-tab">
                    Register
                </button>
            </div>
            
            <div id="auth-content">
                ${createLoginForm(userType)}
            </div>
        </div>
    `;
    
    return modal;
}

function createLoginForm(userType) {
    return `
        <form id="login-form" onsubmit="handleLogin('${userType}', event)">
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Email:</label>
                <input type="email" name="email" required style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 16px;">
            </div>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Password:</label>
                <input type="password" name="password" required style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 16px;">
            </div>
            
            <button type="submit" class="demo-btn" style="width: 100%; padding: 15px; font-size: 18px; margin-bottom: 15px;">
                <i class="fas fa-sign-in-alt"></i>
                Sign In
            </button>
            
            <p style="text-align: center; color: #666;">
                <a href="#" onclick="alert('Password reset functionality would be implemented here.')" style="color: var(--primary-color);">
                    Forgot your password?
                </a>
            </p>
        </form>
    `;
}

function createSignupForm(userType) {
    return `
        <form id="signup-form" onsubmit="handleSignup('${userType}', event)">
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Full Name:</label>
                <input type="text" name="fullName" required style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 16px;">
            </div>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Email:</label>
                <input type="email" name="email" required style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 16px;">
            </div>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Phone Number:</label>
                <input type="tel" name="phone" required style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 16px;">
            </div>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Password:</label>
                <input type="password" name="password" required minlength="6" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 16px;">
            </div>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Confirm Password:</label>
                <input type="password" name="confirmPassword" required minlength="6" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 16px;">
            </div>
            
            ${userType === 'elderly' ? `
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 5px; font-weight: 500;">Date of Birth:</label>
                    <input type="date" name="dateOfBirth" required style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 16px;">
                </div>
            ` : ''}
            
            ${userType === 'alzheimer' ? `
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 5px; font-weight: 500;">Primary Caregiver Contact:</label>
                    <input type="tel" name="caregiverPhone" required style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 16px;">
                </div>
            ` : ''}
            
            ${userType === 'caregiver' ? `
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 5px; font-weight: 500;">Patient Code (if connecting to existing patient):</label>
                    <input type="text" name="patientCode" placeholder="Optional" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 16px;">
                </div>
            ` : ''}
            
            <button type="submit" class="demo-btn" style="width: 100%; padding: 15px; font-size: 18px;">
                <i class="fas fa-user-plus"></i>
                Create Account
            </button>
        </form>
    `;
}

function showLoginForm(userType) {
    document.getElementById('login-tab').classList.add('active');
    document.getElementById('signup-tab').classList.remove('active');
    document.getElementById('auth-content').innerHTML = createLoginForm(userType);
}

function showSignupForm(userType) {
    document.getElementById('signup-tab').classList.add('active');
    document.getElementById('login-tab').classList.remove('active');
    document.getElementById('auth-content').innerHTML = createSignupForm(userType);
}

function handleLogin(userType, event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    // Simulate login process
    setTimeout(() => {
        // Store user session
        const userData = {
            email: email,
            userType: userType,
            loginTime: new Date().toISOString(),
            isLoggedIn: true
        };
        
        localStorage.setItem('currentUser', JSON.stringify(userData));
        AppState.currentUser = userData;
        AppState.currentUserType = userType;
        
        // Close modal and redirect to user dashboard
        document.getElementById('auth-modal').remove();
        showUserDashboard(userType);
        
        alert(`Welcome back! You've successfully signed in to your ${userType} account.`);
    }, 1000);
}

function handleSignup(userType, event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }
    
    // Simulate signup process
    setTimeout(() => {
        // Store user data
        const userData = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            userType: userType,
            createdAt: new Date().toISOString(),
            isLoggedIn: true
        };
        
        // Add user type specific data
        if (userType === 'elderly') {
            userData.dateOfBirth = formData.get('dateOfBirth');
        } else if (userType === 'alzheimer') {
            userData.caregiverPhone = formData.get('caregiverPhone');
        } else if (userType === 'caregiver') {
            userData.patientCode = formData.get('patientCode');
        }
        
        localStorage.setItem('currentUser', JSON.stringify(userData));
        AppState.currentUser = userData;
        AppState.currentUserType = userType;
        
        // Close modal and redirect to user dashboard
        document.getElementById('auth-modal').remove();
        showUserDashboard(userType);
        
        alert(`Welcome to HealthCare+! Your ${userType} account has been created successfully.`);
    }, 1000);
}

function showUserDashboard(userType) {
    // Create and show user-specific dashboard
    hideAllSections();
    
    let dashboardHTML = '';
    
    switch(userType) {
        case 'elderly':
            dashboardHTML = createElderlyDashboard();
            break;
        case 'alzheimer':
            dashboardHTML = createAlzheimerDashboard();
            break;
        case 'caregiver':
            dashboardHTML = createCaregiverDashboard();
            break;
    }
    
    // Insert dashboard into main content
    const main = document.querySelector('.main');
    main.innerHTML = dashboardHTML;
}

function createElderlyDashboard() {
    return `
        <div class="section active">
            <div class="container">
                <div class="section-header">
                    <button onclick="location.reload()" class="back-btn">
                        <i class="fas fa-arrow-left"></i>
                        Back to Home
                    </button>
                    <h2>Elderly Care Dashboard</h2>
                    <button onclick="logout()" class="back-btn" style="background: var(--danger-color);">
                        <i class="fas fa-sign-out-alt"></i>
                        Logout
                    </button>
                </div>

                <div class="features-grid">
                    <div class="feature-card" onclick="showHealthTracking()">
                        <div class="feature-icon">
                            <i class="fas fa-heartbeat"></i>
                        </div>
                        <h3>Health Tracking</h3>
                        <p>Monitor your daily health metrics, medications, and appointments</p>
                    </div>

                    <div class="feature-card" onclick="showMemories()">
                        <div class="feature-icon">
                            <i class="fas fa-images"></i>
                        </div>
                        <h3>Memories</h3>
                        <p>Store and view your precious memories, photos, and life stories</p>
                    </div>

                    <div class="feature-card" onclick="showWellnessNotes()">
                        <div class="feature-icon">
                            <i class="fas fa-sticky-note"></i>
                        </div>
                        <h3>Wellness Notes</h3>
                        <p>Keep track of your daily wellness observations and notes</p>
                    </div>

                    <div class="feature-card" onclick="showEmergencyContacts()">
                        <div class="feature-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <h3>Emergency Contacts</h3>
                        <p>Manage your emergency contacts and medical information</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createAlzheimerDashboard() {
    return `
        <div class="section active">
            <div class="container">
                <div class="section-header">
                    <button onclick="location.reload()" class="back-btn">
                        <i class="fas fa-arrow-left"></i>
                        Back to Home
                    </button>
                    <h2>Alzheimer Support Dashboard</h2>
                    <button onclick="logout()" class="back-btn" style="background: var(--danger-color);">
                        <i class="fas fa-sign-out-alt"></i>
                        Logout
                    </button>
                </div>

                <div class="features-grid">
                    <div class="feature-card" onclick="showTaskNotepad()">
                        <div class="feature-icon">
                            <i class="fas fa-clipboard-list"></i>
                        </div>
                        <h3>Task Notepad</h3>
                        <p>Write down your current tasks and daily activities</p>
                    </div>

                    <div class="feature-card" onclick="showMemoryBank()">
                        <div class="feature-icon">
                            <i class="fas fa-brain"></i>
                        </div>
                        <h3>Memory Bank</h3>
                        <p>Store and access all your important memories and information</p>
                    </div>

                    <div class="feature-card" onclick="showContactDirectory()">
                        <div class="feature-icon">
                            <i class="fas fa-address-book"></i>
                        </div>
                        <h3>Contact Directory</h3>
                        <p>Easy access to all your important contacts and relationships</p>
                    </div>

                    <div class="feature-card" onclick="showDailyReminders()">
                        <div class="feature-icon">
                            <i class="fas fa-bell"></i>
                        </div>
                        <h3>Daily Reminders</h3>
                        <p>Set and receive reminders for medications and activities</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createCaregiverDashboard() {
    return `
        <div class="section active">
            <div class="container">
                <div class="section-header">
                    <button onclick="location.reload()" class="back-btn">
                        <i class="fas fa-arrow-left"></i>
                        Back to Home
                    </button>
                    <h2>Caregiver Portal</h2>
                    <button onclick="logout()" class="back-btn" style="background: var(--danger-color);">
                        <i class="fas fa-sign-out-alt"></i>
                        Logout
                    </button>
                </div>

                <div class="features-grid">
                    <div class="feature-card" onclick="showPatientMonitoring()">
                        <div class="feature-icon">
                            <i class="fas fa-user-check"></i>
                        </div>
                        <h3>Patient Monitoring</h3>
                        <p>Monitor patient activities, location, and health status</p>
                    </div>

                    <div class="feature-card" onclick="showGeofencing()">
                        <div class="feature-icon">
                            <i class="fas fa-map-marked-alt"></i>
                        </div>
                        <h3>Safe Zone Management</h3>
                        <p>Set up and manage geofencing safe zones</p>
                    </div>

                    <div class="feature-card" onclick="showCareNotes()">
                        <div class="feature-icon">
                            <i class="fas fa-notes-medical"></i>
                        </div>
                        <h3>Care Notes</h3>
                        <p>Record and track care activities and observations</p>
                    </div>

                    <div class="feature-card emergency-card" onclick="showEmergencyAlerts()">
                        <div class="feature-icon">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                        <h3>Emergency Alerts</h3>
                        <p>View and manage emergency alerts and notifications</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Placeholder functions for user dashboard features
function showHealthTracking() {
    alert('Health Tracking feature - Monitor vitals, medications, and appointments');
}

function showMemories() {
    alert('Memories feature - Store photos, videos, and life stories');
}

function showWellnessNotes() {
    alert('Wellness Notes feature - Daily health observations and notes');
}

function showEmergencyContacts() {
    alert('Emergency Contacts feature - Manage emergency contacts and medical info');
}

function showTaskNotepad() {
    alert('Task Notepad feature - Write current tasks and activities');
}

function showMemoryBank() {
    alert('Memory Bank feature - Access stored memories and information');
}

function showContactDirectory() {
    alert('Contact Directory feature - Important contacts with photos');
}

function showDailyReminders() {
    alert('Daily Reminders feature - Medication and activity reminders');
}

function showPatientMonitoring() {
    alert('Patient Monitoring feature - Real-time patient status');
}

function showGeofencing() {
    alert('Geofencing feature - Manage safe zones and location alerts');
}

function showCareNotes() {
    alert('Care Notes feature - Record care activities and observations');
}

function showEmergencyAlerts() {
    alert('Emergency Alerts feature - View and respond to alerts');
}

function logout() {
    localStorage.removeItem('currentUser');
    AppState.currentUser = null;
    AppState.currentUserType = null;
    location.reload();
}

// Utility functions
function checkUserSession() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        AppState.currentUser = JSON.parse(storedUser);
        AppState.currentUserType = AppState.currentUser.userType;
        
        // Update navigation to show user is logged in
        updateUserNavigation();
    }
}

function updateUserNavigation() {
    const userSelector = document.querySelector('.user-type-selector');
    if (AppState.currentUser) {
        userSelector.innerHTML = `
            <div class="user-info" style="display: flex; align-items: center; gap: 10px;">
                <span style="color: var(--primary-color); font-weight: 500;">
                    ${AppState.currentUser.fullName || AppState.currentUser.email}
                </span>
                <button onclick="showUserDashboard('${AppState.currentUserType}')" class="nav-link">
                    <i class="fas fa-tachometer-alt"></i>
                    Dashboard
                </button>
                <button onclick="logout()" class="nav-link" style="background: var(--danger-color);">
                    <i class="fas fa-sign-out-alt"></i>
                    Logout
                </button>
            </div>
        `;
    }
}

// Initialize app
function initializeApp() {
    console.log('🏥 HealthCare+ App Initialized');
    
    // Check for existing user session
    checkUserSession();
    
    // Set up global error handling
    window.addEventListener('error', function(event) {
        console.error('App error:', event.error);
    });
    
    // Set up responsive navigation
    setupResponsiveNavigation();
    
    console.log('✅ App ready for use');
}

function setupResponsiveNavigation() {
    // Handle window resize for responsive design
    window.addEventListener('resize', function() {
        // Adjust layout for mobile devices
        if (window.innerWidth <= 768) {
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
        }
    });
    
    // Initial check
    if (window.innerWidth <= 768) {
        document.body.classList.add('mobile-view');
    }
}

// Add CSS styles for auth modal
const authStyles = `
    .auth-tab {
        flex: 1;
        padding: 12px 20px;
        background: #f8f9fa;
        border: none;
        border-bottom: 3px solid transparent;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        transition: all 0.3s ease;
    }
    
    .auth-tab.active {
        background: var(--white);
        border-bottom-color: var(--primary-color);
        color: var(--primary-color);
    }
    
    .auth-tab:hover {
        background: var(--white);
    }
`;

// Inject auth styles
const styleSheet = document.createElement('style');
styleSheet.textContent = authStyles;
document.head.appendChild(styleSheet);

// Start the app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}