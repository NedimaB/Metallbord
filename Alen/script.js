// Prikazivanje detalja proizvoda na hover
function showDetails(productId) {
    document.getElementById(productId).style.display = 'block';
}

// Sakrivanje detalja proizvoda kada se ne hoveruje
function hideDetails(productId) {
    document.getElementById(productId).style.display = 'none';
}

// Obrada slanja forme
function handleFormSubmit(event) {
    event.preventDefault();

    // Dobijanje vrednosti iz forme
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Osnovna validacija forme
    if (name && email && message) {
        alert('Hvala što ste nas kontaktirali! Odgovorićemo vam uskoro.');
        document.getElementById('contact-form').reset(); // Resetovanje forme
    } else {
        alert('Molimo vas da popunite sva polja.');
    }
}
// Funkcija za ažuriranje cijene na temelju odabrane veličine (prvi stol)
document.getElementById('size1').addEventListener('change', function() {
    const size = this.value;
    const priceElement = document.getElementById('price1');

    // Prilagodite cijenu na osnovu odabrane veličine
    switch(size) {
        case 'small':
            priceElement.textContent = 'Cijena: 500 KM';  // Cijena za malu veličinu
            break;
        case 'medium':
            priceElement.textContent = 'Cijena: 750 KM';  // Cijena za srednju veličinu
            break;
        case 'large':
            priceElement.textContent = 'Cijena: 1000 KM';  // Cijena za veliku veličinu
            break;
        default:
            priceElement.textContent = 'Cijena: 500 KM';  // Zadana cijena
            break;
    }
});

// Funkcija za ažuriranje cijene na temelju odabrane veličine (drugi stol)
document.getElementById('size2').addEventListener('change', function() {
    const size = this.value;
    const priceElement = document.getElementById('price2');

    // Prilagodite cijenu na osnovu odabrane veličine
    switch(size) {
        case 'small':
            priceElement.textContent = 'Cijena: 600 KM';  // Cijena za malu veličinu
            break;
        case 'medium':
            priceElement.textContent = 'Cijena: 850 KM';  // Cijena za srednju veličinu
            break;
        case 'large':
            priceElement.textContent = 'Cijena: 1200 KM';  // Cijena za veliku veličinu
            break;
        default:
            priceElement.textContent = 'Cijena: 600 KM';  // Zadana cijena
            break;
    }
});

// Funkcija za ažuriranje cijene na temelju odabrane veličine (polica)
document.getElementById('size3').addEventListener('change', function() {
    const size = this.value;
    const priceElement = document.getElementById('price3');

    // Prilagodite cijenu na osnovu odabrane veličine
    switch(size) {
        case 'small':
            priceElement.textContent = 'Cijena: 95 KM';  // Cijena za malu veličinu
            break;
        case 'medium':
            priceElement.textContent = 'Cijena: 150 KM';  // Cijena za srednju veličinu
            break;
        default:
            priceElement.textContent = 'Cijena: 95 KM';  // Zadana cijena
            break;
    }
});

// Funkcija za ažuriranje cijene na temelju odabrane veličine (treci stol)
document.getElementById('size4').addEventListener('change', function() {
    const size = this.value;
    const priceElement = document.getElementById('price4');

    // Prilagodite cijenu na osnovu odabrane veličine
    switch(size) {
        case 'small':
            priceElement.textContent = 'Cijena: 600 KM';  // Cijena za malu veličinu
            break;
        case 'medium':
            priceElement.textContent = 'Cijena: 850 KM';  // Cijena za srednju veličinu
            break;
        case 'large':
            priceElement.textContent = 'Cijena: 1200 KM';  // Cijena za veliku veličinu
            break;
        default:
            priceElement.textContent = 'Cijena: 600 KM';  // Zadana cijena
            break;
    }
});

// Funkcija za ažuriranje cijene na temelju odabrane veličine (cetvrti stol)
document.getElementById('size5').addEventListener('change', function() {
    const size = this.value;
    const priceElement = document.getElementById('price5');

    // Prilagodite cijenu na osnovu odabrane veličine
    switch(size) {
        case 'small':
            priceElement.textContent = 'Cijena: 600 KM';  // Cijena za malu veličinu
            break;
        case 'medium':
            priceElement.textContent = 'Cijena: 850 KM';  // Cijena za srednju veličinu
            break;
        case 'large':
            priceElement.textContent = 'Cijena: 1200 KM';  // Cijena za veliku veličinu
            break;
        default:
            priceElement.textContent = 'Cijena: 600 KM';  // Zadana cijena
            break;
    }
});

// Funkcija za ažuriranje cijene na temelju odabrane veličine (peti stol)
document.getElementById('size6').addEventListener('change', function() {
    const size = this.value;
    const priceElement = document.getElementById('price6');

    // Prilagodite cijenu na osnovu odabrane veličine
    switch(size) {
        case 'small':
            priceElement.textContent = 'Cijena: 600 KM';  // Cijena za malu veličinu
            break;
        case 'medium':
            priceElement.textContent = 'Cijena: 850 KM';  // Cijena za srednju veličinu
            break;
        case 'large':
            priceElement.textContent = 'Cijena: 1200 KM';  // Cijena za veliku veličinu
            break;
        default:
            priceElement.textContent = 'Cijena: 600 KM';  // Zadana cijena
            break;
    }
});

function updatePrice() {
    // Dohvatanje selektovanih dimenzija
    const sizeSelect = document.getElementById('size-select');
    const selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
    
    // Dohvatanje cijene iz atributa 'data-price' odabrane opcije
    const price = selectedOption.getAttribute('data-price');
    
    // Ažuriranje cijene na stranici
    const priceElement = document.getElementById('product-price');
    priceElement.textContent = `${price} KM`;  // Ažuriranje teksta sa novom cijenom
}

function sendEmail(productName, size, price) {
    // Slika proizvoda (putanja slike)
    const productImage = "C:\\Users\\Toshiba -01\\Documents\\Alen\\jpg\\Table1.jpg";  // Promijeniti u odgovarajuću putanju
    
    // Sadržaj e-maila
    const subject = `Kupovina proizvoda: ${productName}`;
    const body = `
        Poštovani,\n\n
        Želim kupiti proizvod: ${productName}.\n
        Dimenzije: ${size}\n
        Cijena: ${price} KM\n\n
        Sliku proizvoda možete pogledati na ovom linku: ${productImage}\n\n
        Hvala!
    `;

    // Otvorite mailto link sa podacima o proizvodu
    window.location.href = `mailto:metallbord@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
