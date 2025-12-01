document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');

    // Product Data
    // Note: Image paths assume the naming convention from generation.
    // We will list the generated ones first, then placeholders for uploaded ones if needed.
    const products = [
        {
            name: "Guardian Node",
            description: "The central nervous system of your secure home. AI-driven processing with quantum-resistant encryption.",
            image: "assets/guardian_node_1764615343990.png"
        },
        {
            name: "Guardian Ring",
            description: "Biometric authentication at your fingertips. Titanium construction with haptic feedback interface.",
            image: "assets/guardian_ring_1764615329007.png"
        },
        {
            name: "Guardian Vision",
            description: "Augmented reality eyewear for seamless data integration. Lightweight carbon fiber frame.",
            image: "assets/guardian_vision_1764615360399.png"
        },
        {
            name: "Guardian Sentry",
            description: "Autonomous perimeter security. 360-degree surveillance with advanced threat detection.",
            image: "assets/guardian_sentry_1764615376666.png"
        },
        {
            name: "Guardian Shield",
            description: "Personal kinetic barrier generator. Portable protection for the modern explorer.",
            image: "assets/guardian_shield_1764615508241.png"
        },
        {
            name: "Guardian Core",
            description: "Infinite power solution. Zero-point energy containment for all RESQNET devices.",
            image: "assets/guardian_core_1764615526654.png"
        },
        {
            name: "Guardian Link",
            description: "Neural interface communication. Silent, secure, and instant connection.",
            image: "assets/guardian_link_1764615541081.png"
        }
    ];

    // Add uploaded images as "Prototype" products
    // We'll use a generic name unless updated later
    const uploadedImages = [
        "assets/uploaded_image_0_1764615464396.jpg",
        "assets/uploaded_image_1_1764615464396.jpg",
        "assets/uploaded_image_2_1764615464396.jpg",
        "assets/uploaded_image_3_1764615464396.jpg"
    ];

    uploadedImages.forEach((img, index) => {
        products.push({
            name: `Prototype Model 0${index + 1}`,
            description: "Experimental hardware currently in classified development stages.",
            image: img
        });
    });

    // Render Products
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="card-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <a href="#" class="card-link">Learn More</a>
            </div>
        `;
        productGrid.appendChild(card);
    });

    // Simple Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Apply to cards (add initial style first)
    /* Note: Ideally this is done in CSS, but we'll let the natural flow handle it for now 
       to avoid complexity with dynamic JS insertion. */
});
