const hospitals = [
    { name: "Rumah Sakit Islam Negeri", location: "Tangerang", img: "../Picture/rs6-removebg-preview.png" },
    { name: "Rumah Sakit Mitra Keluarga", location: "Bekasi", img: "../Picture/rs7-removebg-preview.png" },
    { name: "Rumah Sakit Muhammad Ihram", location: "Bogor", img: "../Picture/rs3-removebg-preview.png" },
    { name: "Rumah Sakit Muhammad Abdul", location: "Papua", img: "../Picture/rs2-removebg-preview.png" },
    { name: "Rumah Sakit Muhammad Luthfi", location: "Mataram", img: "../Picture/rs4-removebg-preview.png" },
    { name: "Rumah Sakit Muhammad Rava", location: "Sunda", img: "../Picture/rs5-removebg-preview.png" },
    { name: "Rumah Sakit Fadhil Athalah", location: "Jakarta", img: "../Picture/rs1-removebg-preview.png" },
    // Add more hospital data as needed
];

function searchFunction() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('hospital-results');
    resultsContainer.innerHTML = '';
    
    const filteredHospitals = hospitals.filter(hospital => 
        hospital.name.toLowerCase().includes(input) || 
        hospital.location.toLowerCase().includes(input)
    );

    filteredHospitals.forEach(hospital => {
        const hospitalCard = document.createElement('div');
        hospitalCard.className = 'hospital-card';
        
        hospitalCard.innerHTML = `
            <img src="${hospital.img}" alt="${hospital.name}">
            <div>
                <p>${hospital.name}</p>
                <p>${hospital.location}</p>
            </div>
        `;

        resultsContainer.appendChild(hospitalCard);
    });
}

document.addEventListener('DOMContentLoaded', searchFunction);
