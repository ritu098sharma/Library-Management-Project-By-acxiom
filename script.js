
let currentUserRole = "";

function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === 'adm' && pass === 'adm') {
        currentUserRole = 'adm'; 
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('home-page').classList.remove('hidden');
    
        document.getElementById('nav-maintenance').style.display = 'inline'; 
    } 
    else if (user === 'user' && pass === 'user') {
        currentUserRole = 'user'; 
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('home-page').classList.remove('hidden');
       
        document.getElementById('nav-maintenance').style.display = 'none';
    }
}function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    
    if ((user === 'adm' && pass === 'adm') || (user === 'user' && pass === 'user')) {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('home-page').classList.remove('hidden');
    } else {
        alert("Invalid Login Credentials!");
    }
}

function logout() {
    document.getElementById('login-page').classList.remove('hidden');
    document.getElementById('home-page').classList.add('hidden');
    
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
}

function validateAndSearch() {
    const book = document.getElementById('avail-book-name').value;
    const author = document.getElementById('avail-author-name').value;

    
    if (book === "" && author === "") {
        alert("Please select a Book Name or an Author before searching.");
    } else {
        
        document.getElementById('availability-page').style.display = 'none';
        showSection('search-results-area'); 
    }
}
function showPage(pageId) {
    
    const pages = ['availability-page', 'issue-page', 'return-page', 'fine-page'];

    
    pages.forEach(id => {
        const page = document.getElementById(id);
        if (page) {
            page.style.display = 'none';
        }
    });

    
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.style.display = 'block';
    }
}
function processReturn() {
    const bookName = document.getElementById('return-book-name').value;
    const returnDate = document.getElementById('return-actual-date').value;

    
    if (!bookName || !returnDate) {
        alert("Error: Please enter the Book Name and Return Date.");
        return;
    }

    
    const hasFine = true; 

    if (hasFine) {
        alert("Fine detected! Redirecting to Pay Fine page.");
        
       
        document.getElementById('fine-book-name').value = bookName;
        document.getElementById('fine-amount').value = 50; 
        
        showPage('fine-page');
    } else {
        alert("Book returned successfully with no fine!");
        showPage('issue-page');
    }
}
function completeFinePayment() {
    const isPaid = document.getElementById('fine-paid-check').checked;

    if (!isPaid) {
        
        alert("Please check the 'Fine Paid' box to confirm the payment.");
    } else {
        alert("Fine payment successful! The book has been cleared.");
        
        showPage('issue-page');
    }
}
function switchModule(moduleName) {
    
    if (moduleName === 'maintenance' && currentUserRole !== 'adm') {
        alert("Access Denied: Only Admin can access Maintenance.");
        return;
    }

    
    const allSideMenus = document.querySelectorAll('.side-menu');
    allSideMenus.forEach(menu => menu.classList.add('hidden'));

   
    const targetMenu = document.getElementById('side-' + moduleName);
    if (targetMenu) {
        targetMenu.classList.remove('hidden');
    }

    
    const allNavItems = document.querySelectorAll('.nav-item');
    allNavItems.forEach(item => item.classList.remove('active'));
    document.getElementById('nav-' + moduleName).classList.add('active');

    clearFormArea();
}
function switchModule(moduleName) {
   
    if (moduleName === 'maintenance' && currentUserRole !== 'adm') {
        alert("Sirf Admin hi Maintenance khol sakta hai!");
        return;
    }

    document.getElementById('side-transactions').style.display = 'none';
    document.getElementById('side-maintenance').style.display = 'none';
    document.getElementById('side-reports').style.display = 'none';

    
    document.getElementById('side-' + moduleName).style.display = 'block';

    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
}
