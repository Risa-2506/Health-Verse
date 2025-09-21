// Doctors data and functionality

const doctorsData = {
    cardiology: [
        {
            name: "Dr. Sarah Johnson",
            specialty: "Cardiology",
            experience: "15 years",
            hospital: "Heart Care Center",
            phone: "(555) 123-4567",
            rating: 4.8,
            address: "123 Medical Plaza, Downtown",
            description: "Specializes in heart disease prevention and treatment, cardiac surgery"
        },
        {
            name: "Dr. Michael Chen",
            specialty: "Cardiology", 
            experience: "12 years",
            hospital: "City General Hospital",
            phone: "(555) 234-5678",
            rating: 4.9,
            address: "456 Health Ave, Medical District",
            description: "Expert in interventional cardiology and heart rhythm disorders"
        },
        {
            name: "Dr. Emily Rodriguez",
            specialty: "Cardiology",
            experience: "18 years",
            hospital: "Advanced Heart Institute",
            phone: "(555) 345-6789",
            rating: 4.7,
            address: "789 Cardiac Way, Health Center",
            description: "Focuses on preventive cardiology and women's heart health"
        }
    ],
    dermatology: [
        {
            name: "Dr. Jennifer Adams",
            specialty: "Dermatology",
            experience: "10 years",
            hospital: "Skin Health Clinic",
            phone: "(555) 456-7890",
            rating: 4.6,
            address: "321 Wellness Blvd, Medical Center",
            description: "Specializes in skin cancer detection, cosmetic dermatology"
        },
        {
            name: "Dr. Robert Kim",
            specialty: "Dermatology",
            experience: "14 years",
            hospital: "Premier Dermatology",
            phone: "(555) 567-8901",
            rating: 4.8,
            address: "654 Beauty Lane, Wellness District",
            description: "Expert in psoriasis, eczema, and anti-aging treatments"
        },
        {
            name: "Dr. Lisa Thompson",
            specialty: "Dermatology",
            experience: "16 years",
            hospital: "Comprehensive Skin Care",
            phone: "(555) 678-9012",
            rating: 4.9,
            address: "987 Dermal Street, Care Complex",
            description: "Focuses on pediatric dermatology and rare skin conditions"
        }
    ],
    orthopedics: [
        {
            name: "Dr. David Wilson",
            specialty: "Orthopedics",
            experience: "20 years",
            hospital: "Bone & Joint Center",
            phone: "(555) 789-0123",
            rating: 4.7,
            address: "147 Joint Way, Orthopedic Plaza",
            description: "Specializes in joint replacement, sports medicine"
        },
        {
            name: "Dr. Maria Garcia",
            specialty: "Orthopedics",
            experience: "13 years",
            hospital: "Movement Medicine Clinic",
            phone: "(555) 890-1234",
            rating: 4.8,
            address: "258 Mobility Ave, Recovery Center",
            description: "Expert in spine surgery and fracture treatment"
        },
        {
            name: "Dr. James Brown",
            specialty: "Orthopedics",
            experience: "17 years",
            hospital: "Advanced Bone Care",
            phone: "(555) 901-2345",
            rating: 4.6,
            address: "369 Skeletal Blvd, Bone Institute",
            description: "Focuses on pediatric orthopedics and limb reconstruction"
        }
    ],
    neurology: [
        {
            name: "Dr. Patricia Davis",
            specialty: "Neurology",
            experience: "19 years",
            hospital: "Brain Health Institute",
            phone: "(555) 012-3456",
            rating: 4.9,
            address: "741 Neural Ave, Mind Center",
            description: "Specializes in Alzheimer's, Parkinson's, and stroke care"
        },
        {
            name: "Dr. Christopher Lee",
            specialty: "Neurology",
            experience: "11 years",
            hospital: "Neurological Associates",
            phone: "(555) 123-4567",
            rating: 4.7,
            address: "852 Synapse Street, Brain Plaza",
            description: "Expert in epilepsy treatment and memory disorders"
        },
        {
            name: "Dr. Amanda White",
            specialty: "Neurology",
            experience: "15 years",
            hospital: "Comprehensive Neuro Care",
            phone: "(555) 234-5678",
            rating: 4.8,
            address: "963 Cerebral Way, Neural Institute",
            description: "Focuses on migraine treatment and nerve disorders"
        }
    ],
    ophthalmology: [
        {
            name: "Dr. Kevin Martinez",
            specialty: "Ophthalmology",
            experience: "16 years",
            hospital: "Vision Excellence Center",
            phone: "(555) 345-6789",
            rating: 4.8,
            address: "159 Sight Avenue, Eye Center",
            description: "Specializes in cataract surgery, glaucoma treatment"
        },
        {
            name: "Dr. Rachel Taylor",
            specialty: "Ophthalmology",
            experience: "12 years",
            hospital: "Clear Vision Clinic",
            phone: "(555) 456-7890",
            rating: 4.7,
            address: "267 Optical Blvd, Vision Plaza",
            description: "Expert in retinal diseases and diabetic eye care"
        },
        {
            name: "Dr. Thomas Anderson",
            specialty: "Ophthalmology",
            experience: "14 years",
            hospital: "Eye Care Associates",
            phone: "(555) 567-8901",
            rating: 4.9,
            address: "378 Pupil Street, Cornea Center",
            description: "Focuses on LASIK surgery and pediatric eye care"
        }
    ],
    geriatrics: [
        {
            name: "Dr. Margaret Jones",
            specialty: "Geriatrics",
            experience: "22 years",
            hospital: "Senior Care Medical Center",
            phone: "(555) 678-9012",
            rating: 4.9,
            address: "489 Elder Avenue, Senior Plaza",
            description: "Specializes in comprehensive elderly care, dementia management"
        },
        {
            name: "Dr. William Clark",
            specialty: "Geriatrics",
            experience: "18 years",
            hospital: "Golden Years Health",
            phone: "(555) 789-0123",
            rating: 4.8,
            address: "591 Wisdom Way, Age Center",
            description: "Expert in fall prevention, medication management for seniors"
        },
        {
            name: "Dr. Helen Miller",
            specialty: "Geriatrics",
            experience: "20 years",
            hospital: "Aging Well Institute",
            phone: "(555) 890-1234",
            rating: 4.7,
            address: "602 Maturity Lane, Life Center",
            description: "Focuses on healthy aging, chronic disease management"
        }
    ]
};

function showDoctorList(specialty) {
    const doctorList = document.getElementById('doctor-list');
    const specialtyTitle = document.getElementById('specialty-title');
    const doctorsContainer = document.getElementById('doctors-container');
    
    // Clear previous content
    doctorsContainer.innerHTML = '';
    
    // Set title
    specialtyTitle.textContent = `${specialty.charAt(0).toUpperCase() + specialty.slice(1)} Specialists`;
    
    // Get doctors for this specialty
    const doctors = doctorsData[specialty] || [];
    
    if (doctors.length === 0) {
        doctorsContainer.innerHTML = '<p class="no-doctors">No doctors found for this specialty.</p>';
        doctorList.style.display = 'block';
        return;
    }
    
    // Create doctor cards
    doctors.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'doctor-card';
        
        const stars = '★'.repeat(Math.floor(doctor.rating)) + (doctor.rating % 1 ? '☆' : '');
        
        doctorCard.innerHTML = `
            <h4>${doctor.name}</h4>
            <p><strong>Experience:</strong> ${doctor.experience}</p>
            <p><strong>Hospital:</strong> ${doctor.hospital}</p>
            <p><strong>Phone:</strong> ${doctor.phone}</p>
            <p><strong>Address:</strong> ${doctor.address}</p>
            <p><strong>Specialization:</strong> ${doctor.description}</p>
            <div class="doctor-rating">
                <span class="stars">${stars}</span>
                <span>${doctor.rating}/5.0</span>
            </div>
            <button onclick="bookAppointment('${doctor.name}', '${doctor.phone}')" class="demo-btn" style="margin-top: 15px; padding: 10px 20px;">
                <i class="fas fa-calendar-plus"></i>
                Book Appointment
            </button>
        `;
        
        doctorsContainer.appendChild(doctorCard);
    });
    
    // Show the doctor list
    doctorList.style.display = 'block';
    
    // Smooth scroll to doctor list
    doctorList.scrollIntoView({ behavior: 'smooth' });
}

function hideDoctorList() {
    const doctorList = document.getElementById('doctor-list');
    doctorList.style.display = 'none';
}

function bookAppointment(doctorName, phone) {
    // In a real app, this would integrate with a booking system
    const message = `To book an appointment with ${doctorName}, please call ${phone} or use our online booking system.`;
    
    // Create a modal-like alert
    if (confirm(`${message}\n\nWould you like to save this doctor's contact information?`)) {
        // Save to local storage (in real app, would save to user's account)
        const savedDoctors = JSON.parse(localStorage.getItem('savedDoctors') || '[]');
        const doctorInfo = {
            name: doctorName,
            phone: phone,
            savedAt: new Date().toISOString()
        };
        
        savedDoctors.push(doctorInfo);
        localStorage.setItem('savedDoctors', JSON.stringify(savedDoctors));
        
        alert(`${doctorName}'s contact information has been saved to your account.`);
    }
}

// Search doctors functionality
function searchDoctors(query) {
    if (!query || query.length < 2) {
        return [];
    }
    
    const results = [];
    const searchTerm = query.toLowerCase();
    
    // Search through all specialties
    for (const [specialty, doctors] of Object.entries(doctorsData)) {
        doctors.forEach(doctor => {
            if (
                doctor.name.toLowerCase().includes(searchTerm) ||
                doctor.specialty.toLowerCase().includes(searchTerm) ||
                doctor.hospital.toLowerCase().includes(searchTerm) ||
                doctor.description.toLowerCase().includes(searchTerm) ||
                specialty.toLowerCase().includes(searchTerm)
            ) {
                results.push({ ...doctor, specialty });
            }
        });
    }
    
    return results;
}

// Initialize doctors data in local storage for demo purposes
function initializeDoctorsData() {
    if (!localStorage.getItem('doctorsData')) {
        localStorage.setItem('doctorsData', JSON.stringify(doctorsData));
    }
}

// Call initialization when the script loads
initializeDoctorsData();