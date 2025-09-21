// Home Remedies data and functionality

const remediesData = [
    // Common Cold Remedies
    {
        title: "Honey and Ginger Tea",
        category: "common-cold",
        condition: "Cold, Cough, Sore Throat",
        ingredients: ["2 tbsp fresh honey", "1 inch fresh ginger root", "1 cup hot water", "1 tsp lemon juice (optional)"],
        instructions: "Slice ginger and steep in hot water for 5 minutes. Add honey and lemon juice. Drink 2-3 times daily.",
        benefits: "Soothes throat, reduces inflammation, boosts immunity",
        precautions: "Not suitable for children under 1 year due to honey"
    },
    {
        title: "Salt Water Gargle",
        category: "common-cold",
        condition: "Sore Throat, Mouth Infection",
        ingredients: ["1 tsp salt", "1 cup warm water"],
        instructions: "Dissolve salt in warm water. Gargle for 30 seconds, then spit out. Repeat 3-4 times daily.",
        benefits: "Reduces swelling, kills bacteria, soothes pain",
        precautions: "Do not swallow the salt water"
    },
    {
        title: "Steam Inhalation",
        category: "common-cold",
        condition: "Congestion, Sinusitis",
        ingredients: ["Hot water", "Large bowl", "Towel", "Eucalyptus oil (optional)"],
        instructions: "Pour hot water in bowl, add 2-3 drops eucalyptus oil if desired. Cover head with towel and inhale steam for 5-10 minutes.",
        benefits: "Clears nasal congestion, moisturizes airways",
        precautions: "Keep safe distance from hot water to avoid burns"
    },

    // Digestive Remedies
    {
        title: "Peppermint Tea",
        category: "digestive",
        condition: "Indigestion, Nausea, IBS",
        ingredients: ["1 tbsp dried peppermint leaves", "1 cup hot water", "Honey to taste"],
        instructions: "Steep peppermint leaves in hot water for 5-7 minutes. Strain and add honey if desired. Drink after meals.",
        benefits: "Relaxes digestive muscles, reduces gas, soothes nausea",
        precautions: "May worsen heartburn in some people"
    },
    {
        title: "Ginger for Nausea",
        category: "digestive",
        condition: "Nausea, Morning Sickness, Motion Sickness",
        ingredients: ["1 inch fresh ginger root", "1 cup water", "Honey (optional)"],
        instructions: "Grate ginger and steep in hot water for 10 minutes. Strain and sweeten with honey. Sip slowly.",
        benefits: "Reduces nausea, aids digestion, anti-inflammatory",
        precautions: "Consult doctor if pregnant or on blood thinners"
    },
    {
        title: "Fennel Seed Water",
        category: "digestive",
        condition: "Bloating, Gas, Indigestion",
        ingredients: ["1 tsp fennel seeds", "1 cup water"],
        instructions: "Boil fennel seeds in water for 5 minutes. Strain and drink warm. Can also chew seeds directly after meals.",
        benefits: "Reduces bloating, improves digestion, freshens breath",
        precautions: "Generally safe, but avoid excessive amounts"
    },

    // Pain Relief Remedies
    {
        title: "Turmeric Golden Milk",
        category: "pain-relief",
        condition: "Joint Pain, Inflammation, Arthritis",
        ingredients: ["1 tsp turmeric powder", "1 cup warm milk", "1/4 tsp black pepper", "Honey to taste"],
        instructions: "Mix turmeric and black pepper in warm milk. Add honey and stir well. Drink before bedtime.",
        benefits: "Reduces inflammation, relieves joint pain, aids sleep",
        precautions: "May increase bleeding risk if on blood thinners"
    },
    {
        title: "Ice Pack for Acute Pain",
        category: "pain-relief",
        condition: "Acute Injury, Swelling, Headache",
        ingredients: ["Ice cubes", "Clean cloth or towel"],
        instructions: "Wrap ice in cloth and apply to affected area for 15-20 minutes. Take 15-minute breaks between applications.",
        benefits: "Reduces swelling, numbs pain, controls inflammation",
        precautions: "Never apply ice directly to skin, limit to 20 minutes"
    },
    {
        title: "Epsom Salt Soak",
        category: "pain-relief",
        condition: "Muscle Soreness, Foot Pain, Arthritis",
        ingredients: ["2 cups Epsom salt", "Warm bath water"],
        instructions: "Dissolve Epsom salt in warm bath water. Soak for 12-15 minutes. Can also use for foot soaks.",
        benefits: "Relaxes muscles, reduces inflammation, improves circulation",
        precautions: "Avoid if you have kidney problems or open wounds"
    },

    // Skin Care Remedies
    {
        title: "Aloe Vera Gel",
        category: "skin-care",
        condition: "Burns, Cuts, Dry Skin, Sunburn",
        ingredients: ["Fresh aloe vera leaf or pure aloe gel"],
        instructions: "Cut aloe leaf and extract gel, or use pure store-bought gel. Apply directly to affected skin 2-3 times daily.",
        benefits: "Soothes burns, moisturizes skin, promotes healing",
        precautions: "Test on small area first for allergic reactions"
    },
    {
        title: "Oatmeal Face Mask",
        category: "skin-care",
        condition: "Irritated Skin, Eczema, Acne",
        ingredients: ["1/2 cup oatmeal", "Warm water", "1 tbsp honey (optional)"],
        instructions: "Grind oatmeal to powder, mix with water to form paste. Add honey if desired. Apply for 15 minutes, rinse gently.",
        benefits: "Gently exfoliates, soothes irritation, moisturizes",
        precautions: "Use gentle circular motions, avoid scrubbing"
    },
    {
        title: "Cucumber for Puffy Eyes",
        category: "skin-care",
        condition: "Puffy Eyes, Dark Circles, Eye Strain",
        ingredients: ["1 fresh cucumber"],
        instructions: "Cut cucumber into thick slices. Lie down and place slices over closed eyes for 10-15 minutes.",
        benefits: "Reduces puffiness, cools and soothes, hydrates skin",
        precautions: "Ensure cucumber is clean and fresh"
    },

    // Sleep Remedies
    {
        title: "Chamomile Tea",
        category: "sleep",
        condition: "Insomnia, Anxiety, Restlessness",
        ingredients: ["1 tbsp dried chamomile flowers", "1 cup hot water", "Honey (optional)"],
        instructions: "Steep chamomile in hot water for 5-7 minutes. Strain and sweeten with honey. Drink 30 minutes before bed.",
        benefits: "Promotes relaxation, improves sleep quality, reduces anxiety",
        precautions: "May cause drowsiness, avoid if allergic to ragweed"
    },
    {
        title: "Lavender Aromatherapy",
        category: "sleep",
        condition: "Insomnia, Stress, Anxiety",
        ingredients: ["Lavender essential oil", "Diffuser or pillow"],
        instructions: "Add 3-5 drops of lavender oil to diffuser, or put 1-2 drops on pillow corner. Use 30 minutes before sleep.",
        benefits: "Calms nervous system, promotes deep sleep, reduces stress",
        precautions: "Use pure essential oil, may cause skin irritation if applied directly"
    },
    {
        title: "Warm Milk with Nutmeg",
        category: "sleep",
        condition: "Insomnia, Restlessness",
        ingredients: ["1 cup warm milk", "Pinch of nutmeg powder", "Honey to taste"],
        instructions: "Warm milk gently, add nutmeg and honey. Drink 20-30 minutes before bedtime.",
        benefits: "Contains tryptophan, promotes sleepiness, calms mind",
        precautions: "Use very small amount of nutmeg, avoid if lactose intolerant"
    }
];

let currentCategory = 'all';
let searchResults = [];

function renderRemedies(remediesToShow = remediesData) {
    const container = document.getElementById('remedies-container');
    
    if (remediesToShow.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No remedies found</h3>
                <p>Try adjusting your search or selecting a different category.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = remediesToShow.map(remedy => `
        <div class="remedy-card" data-category="${remedy.category}">
            <h4>${remedy.title}</h4>
            <div class="condition">${remedy.condition}</div>
            
            <div class="ingredients">
                <h5><i class="fas fa-list"></i> Ingredients:</h5>
                <ul>
                    ${remedy.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            
            <div class="instructions">
                <h5><i class="fas fa-clipboard-list"></i> Instructions:</h5>
                <p>${remedy.instructions}</p>
            </div>
            
            <div class="benefits">
                <h5><i class="fas fa-heart"></i> Benefits:</h5>
                <p>${remedy.benefits}</p>
            </div>
            
            <div class="precautions">
                <h5><i class="fas fa-exclamation-triangle"></i> Precautions:</h5>
                <p>${remedy.precautions}</p>
            </div>
            
            <button onclick="saveRemedy('${remedy.title}')" class="demo-btn" style="margin-top: 15px;">
                <i class="fas fa-bookmark"></i>
                Save Remedy
            </button>
        </div>
    `).join('');
}

function filterRemedies(category) {
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    currentCategory = category;
    
    let filteredRemedies;
    if (category === 'all') {
        filteredRemedies = remediesData;
    } else {
        filteredRemedies = remediesData.filter(remedy => remedy.category === category);
    }
    
    renderRemedies(filteredRemedies);
}

function searchRemedies() {
    const searchTerm = document.getElementById('remedy-search').value.toLowerCase().trim();
    
    if (searchTerm.length < 2) {
        if (currentCategory === 'all') {
            renderRemedies(remediesData);
        } else {
            filterRemedies(currentCategory);
        }
        return;
    }
    
    let searchResults = remediesData.filter(remedy => {
        return (
            remedy.title.toLowerCase().includes(searchTerm) ||
            remedy.condition.toLowerCase().includes(searchTerm) ||
            remedy.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(searchTerm)
            ) ||
            remedy.instructions.toLowerCase().includes(searchTerm) ||
            remedy.benefits.toLowerCase().includes(searchTerm)
        );
    });
    
    // If a category is selected, further filter by category
    if (currentCategory !== 'all') {
        searchResults = searchResults.filter(remedy => remedy.category === currentCategory);
    }
    
    renderRemedies(searchResults);
}

function saveRemedy(remedyTitle) {
    // Find the remedy
    const remedy = remediesData.find(r => r.title === remedyTitle);
    if (!remedy) return;
    
    // Get saved remedies from localStorage
    const savedRemedies = JSON.parse(localStorage.getItem('savedRemedies') || '[]');
    
    // Check if already saved
    const alreadySaved = savedRemedies.some(saved => saved.title === remedyTitle);
    
    if (alreadySaved) {
        alert('This remedy is already saved to your favorites!');
        return;
    }
    
    // Add to saved remedies
    savedRemedies.push({
        ...remedy,
        savedAt: new Date().toISOString()
    });
    
    localStorage.setItem('savedRemedies', JSON.stringify(savedRemedies));
    alert(`"${remedyTitle}" has been saved to your favorites!`);
}

function showSavedRemedies() {
    const savedRemedies = JSON.parse(localStorage.getItem('savedRemedies') || '[]');
    
    if (savedRemedies.length === 0) {
        alert('No saved remedies found. Start by saving some remedies from the home remedies section!');
        return;
    }
    
    // Create a modal to show saved remedies
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px;">
            <div class="modal-header">
                <h3><i class="fas fa-bookmark"></i> Your Saved Remedies</h3>
                <button onclick="this.closest('.modal').remove()" class="close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div style="max-height: 500px; overflow-y: auto;">
                ${savedRemedies.map((remedy, index) => `
                    <div class="remedy-card" style="margin-bottom: 20px;">
                        <h4>${remedy.title}</h4>
                        <div class="condition">${remedy.condition}</div>
                        <p><strong>Saved on:</strong> ${new Date(remedy.savedAt).toLocaleDateString()}</p>
                        <button onclick="removeRemedy(${index}); this.closest('.modal').remove();" class="close-btn" style="margin-top: 10px;">
                            Remove
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function removeRemedy(index) {
    const savedRemedies = JSON.parse(localStorage.getItem('savedRemedies') || '[]');
    savedRemedies.splice(index, 1);
    localStorage.setItem('savedRemedies', JSON.stringify(savedRemedies));
}

// Enhanced search with autocomplete suggestions
function initializeRemedySearch() {
    const searchInput = document.getElementById('remedy-search');
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(searchRemedies, 300); // Debounce search
    });
    
    // Add Enter key support
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchRemedies();
        }
    });
}

// Initialize the remedies section
function initializeRemedies() {
    renderRemedies();
    
    // Add event listeners when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeRemedySearch);
    } else {
        initializeRemedySearch();
    }
}

// Auto-initialize
initializeRemedies();