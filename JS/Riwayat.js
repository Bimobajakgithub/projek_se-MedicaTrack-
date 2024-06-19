// Ambil elemen dropdown
const filterSelect = document.getElementById('filter-select');

// Ambil semua item riwayat
const riwayatItems = document.querySelectorAll('.riwayat-item');

// Tambahkan event listener untuk perubahan pada dropdown
filterSelect.addEventListener('change', filterRiwayat);

// Fungsi untuk menyaring riwayat
function filterRiwayat() {
    const selectedCategory = filterSelect.value;

    // Loop melalui semua item riwayat
    riwayatItems.forEach(item => {
        const dataCategory = item.getAttribute('data-category');

        // Jika kategori yang dipilih adalah "semua" atau sesuai dengan data-category item
        if (selectedCategory === 'semua' || selectedCategory === dataCategory) {
            item.classList.add('visible'); // Tampilkan item
        } else {
            item.classList.remove('visible'); // Sembunyikan item
        }
    });
}

// Panggil fungsi filterRiwayat saat halaman dimuat untuk menampilkan semua item
filterRiwayat();
