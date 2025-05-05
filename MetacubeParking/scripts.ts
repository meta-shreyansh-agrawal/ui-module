type Employee = {
    fullName: string;
    gender: string;
    email: string;
    password: string;
    contactNumber: string;
    id: string;
};

type Vehicle = {
    name: string;
    type: string;
    number: string;
    employeeId: string;
    identification: string;
};

type Pass = {
    type: string;
    price: number;
    currency: string;
};

type UserData = {
    employee: Employee;
    vehicle: Vehicle;
    pass: Pass;
};

const userData: UserData = {
    employee: {
        fullName: '',
        gender: '',
        email: '',
        password: '',
        contactNumber: '',
        id: ''
    },
    vehicle: {
        name: '',
        type: '',
        number: '',
        employeeId: '',
        identification: ''
    },
    pass: {
        type: '',
        price: 0,
        currency: 'INR'
    }
};

type Pricing = {
    [key: string]: {
        daily: number;
        monthly: number;
        yearly: number;
    };
};

const pricing: Pricing = {
    Cycle: {
        daily: 0.06,
        monthly: 1.2,
        yearly: 6
    },
    MotorCycle: {
        daily: 0.12,
        monthly: 2.4,
        yearly: 12
    },
    FourWheeler: {
        daily: 0.24,
        monthly: 6,
        yearly: 42
    }
};

type ExchangeRates = {
    [key: string]: number;
};

const exchangeRates: ExchangeRates = {
    USD: 1,
    INR: 83.5,
    YEN: 152
};

const nameField = document.getElementById('fullName') as HTMLInputElement;
const nameError = document.getElementById('nameError') as HTMLSpanElement;

nameField.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        validateName();
    }
});

function validateName(): boolean {
    const name = nameField.value.trim();
    const nameRegex = /^[a-zA-Z\s]{2,}$/;

    if (!name) {
        nameError.textContent = 'Name is required';
        return false;
    } else if (!nameRegex.test(name)) {
        nameError.textContent = 'Name must be at least 2 characters and should not contain numbers';
        return false;
    } else {
        nameError.textContent = '';
        userData.employee.fullName = name;

        document.getElementById('nameField')?.classList.add('hidden');
        document.getElementById('genderField')?.classList.remove('hidden');

        const genderLabel = document.getElementById('genderLabel') as HTMLLabelElement;
        if (genderLabel) {
            genderLabel.textContent = `Hi ${name.split(' ')[0]}! Can I know your gender?`;
        }

        return true;
    }
}

const genderOptions = document.querySelectorAll('input[name="gender"]') as NodeListOf<HTMLInputElement>;

genderOptions.forEach(option => {
    option.addEventListener('change', function () {
        userData.employee.gender = this.value;
        
        document.getElementById('genderField')?.classList.add('hidden');
        document.getElementById('emailField')?.classList.remove('hidden');
    });
});

const emailField = document.getElementById('email') as HTMLInputElement;
const emailError = document.getElementById('emailError') as HTMLSpanElement;

emailField.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        validateEmail();
    }
});

function validateEmail(): boolean {
    const email = emailField.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        emailError.textContent = 'Email is required';
        return false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    } else {
        emailError.textContent = '';
        userData.employee.email = email;

        document.getElementById('emailField')?.classList.add('hidden');
        document.getElementById('passwordField')?.classList.remove('hidden');

        return true;
    }
}

const passwordField = document.getElementById('password') as HTMLInputElement;
const passwordError = document.getElementById('passwordError') as HTMLSpanElement;
const passwordStrength = document.getElementById('passwordStrength') as HTMLSpanElement;

passwordField.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        validatePassword();
    }
});

passwordField.addEventListener('input', function () {
    checkPasswordStrength(this.value);
});

function checkPasswordStrength(password: string): void {
    let strength = 0;

    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    if (strength < 3) {
        passwordField.style.borderColor = '#dc3545';
        passwordStrength.textContent = 'Weak password';
        passwordStrength.style.color = '#dc3545';
    } else if (strength < 5) {
        passwordField.style.borderColor = '#fd7e14';
        passwordStrength.textContent = 'Medium password';
        passwordStrength.style.color = '#fd7e14';
    } else {
        passwordField.style.borderColor = '#28a745';
        passwordStrength.textContent = 'Strong password';
        passwordStrength.style.color = '#28a745';
    }
}

function validatePassword(): boolean {
    const password = passwordField.value;

    if (!password) {
        passwordError.textContent = 'Password is required';
        return false;
    } else if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        return false;
    } else if (!/[A-Z]/.test(password)) {
        passwordError.textContent = 'Password must contain at least one uppercase letter';
        return false;
    } else if (!/[a-z]/.test(password)) {
        passwordError.textContent = 'Password must contain at least one lowercase letter';
        return false;
    } else if (!/[0-9]/.test(password)) {
        passwordError.textContent = 'Password must contain at least one number';
        return false;
    } else if (!/[^A-Za-z0-9]/.test(password)) {
        passwordError.textContent = 'Password must contain at least one special character';
        return false;
    } else {
        passwordError.textContent = '';
        userData.employee.password = password;

        document.getElementById('passwordField')?.classList.add('hidden');
        document.getElementById('confirmPasswordField')?.classList.remove('hidden');

        return true;
    }
}

const confirmPasswordField = document.getElementById('confirmPassword') as HTMLInputElement;
const confirmPasswordError = document.getElementById('confirmPasswordError') as HTMLSpanElement;

confirmPasswordField.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        validateConfirmPassword();
    }
});

function validateConfirmPassword(): boolean {
    const confirmPassword = confirmPasswordField.value;

    if (!confirmPassword) {
        confirmPasswordError.textContent = 'Please confirm your password';
        return false;
    } else if (confirmPassword !== userData.employee.password) {
        confirmPasswordError.textContent = 'Passwords do not match';
        return false;
    } else {
        confirmPasswordError.textContent = '';

        document.getElementById('confirmPasswordField')?.classList.add('hidden');
        document.getElementById('contactField')?.classList.remove('hidden');

        return true;
    }
}

const contactField = document.getElementById('contactNumber') as HTMLInputElement;
const contactError = document.getElementById('contactError') as HTMLSpanElement;

contactField.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        validateContact();
    }
});

function validateContact(): boolean {
    const contact = contactField.value.trim();
    const contactRegex = /^\d{8,}$/;

    if (!contact) {
        contactError.textContent = 'Contact number is required';
        return false;
    } else if (!contactRegex.test(contact)) {
        contactError.textContent = 'Contact number must be at least 8 digits';
        return false;
    } else {
        contactError.textContent = '';
        userData.employee.contactNumber = contact;

        completeEmployeeRegistration();

        return true;
    }
}

function completeEmployeeRegistration(): void {
    const id = 'EMP' + Math.floor(10000 + Math.random() * 90000);
    userData.employee.id = id;

    document.getElementById('employeeRegistration')?.classList.add('hidden');
    document.getElementById('registrationSuccess')?.classList.remove('hidden');

    const employeeIdElement = document.getElementById('employeeId') as HTMLSpanElement;
    if (employeeIdElement) {
        employeeIdElement.textContent = id;
    }

    setTimeout(() => {
        document.getElementById('registrationSuccess')?.classList.add('hidden');
        document.getElementById('vehicleRegistration')?.classList.remove('hidden');
    }, 3000);
}

const vehicleNameField = document.getElementById('vehicleName') as HTMLInputElement;
const vehicleNameError = document.getElementById('vehicleNameError') as HTMLSpanElement;

vehicleNameField.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        validateVehicleName();
    }
});

function validateVehicleName(): boolean {
    const name = vehicleNameField.value.trim();

    if (!name) {
        vehicleNameError.textContent = 'Vehicle name is required';
        return false;
    } else {
        vehicleNameError.textContent = '';
        userData.vehicle.name = name;

        document.getElementById('vehicleNameField')?.classList.add('hidden');
        document.getElementById('vehicleTypeField')?.classList.remove('hidden');

        const vehicleTypeLabel = document.getElementById('vehicleTypeLabel') as HTMLLabelElement;
        if (vehicleTypeLabel) {
            vehicleTypeLabel.textContent = 'Which vehicle do you have?';
        }

        return true;
    }
}

const vehicleTypeField = document.getElementById('vehicleType') as HTMLSelectElement;
const vehicleTypeError = document.getElementById('vehicleTypeError') as HTMLSpanElement;

vehicleTypeField.addEventListener('change', function () {
    if (this.value) {
        vehicleTypeError.textContent = '';
        userData.vehicle.type = this.value;

        document.getElementById('vehicleTypeField')?.classList.add('hidden');
        document.getElementById('vehicleNumberField')?.classList.remove('hidden');
    } else {
        vehicleTypeError.textContent = 'Please select a vehicle type';
    }
});

const vehicleNumberField = document.getElementById('vehicleNumber') as HTMLInputElement;
const vehicleNumberError = document.getElementById('vehicleNumberError') as HTMLSpanElement;

vehicleNumberField.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        validateVehicleNumber();
    }
});

function validateVehicleNumber(): boolean {
    const number = vehicleNumberField.value.trim();

    if (!number) {
        vehicleNumberError.textContent = 'Vehicle number is required';
        return false;
    } else {
        vehicleNumberError.textContent = '';
        userData.vehicle.number = number;

        document.getElementById('vehicleNumberField')?.classList.add('hidden');
        document.getElementById('empIdField')?.classList.remove('hidden');

        const empIdElement = document.getElementById('empId') as HTMLInputElement;
        if (empIdElement) {
            empIdElement.value = userData.employee.id;
        }

        userData.vehicle.employeeId = userData.employee.id;

        setTimeout(() => {
            document.getElementById('empIdField')?.classList.add('hidden');
            document.getElementById('identificationField')?.classList.remove('hidden');
        }, 2000);

        return true;
    }
}

const identificationField = document.getElementById('identification') as HTMLInputElement;
const identificationError = document.getElementById('identificationError') as HTMLSpanElement;

identificationField.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        validateIdentification();
    }
});

function validateIdentification(): boolean {
    const identification = identificationField.value.trim();

    if (!identification) {
        identificationError.textContent = 'Identification details are required';
        return false;
    } else {
        identificationError.textContent = '';
        userData.vehicle.identification = identification;
        completeVehicleRegistration();

        return true;
    }
}

function completeVehicleRegistration(): void {
    document.getElementById('vehicleRegistration')?.classList.add('hidden');
    document.getElementById('vehicleSuccess')?.classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('vehicleSuccess')?.classList.add('hidden');
        document.getElementById('passSelection')?.classList.remove('hidden');
        updatePricing();
    }, 2000);
}

const currencySelector = document.getElementById('currencySelector') as HTMLSelectElement;

currencySelector.addEventListener('change', function () {
    userData.pass.currency = this.value;
    updatePricing();
});

function updatePricing(): void {
    if (!userData.vehicle.type) return;

    const selectedCurrency = userData.pass.currency;
    const vehicleType = userData.vehicle.type;

    const dailyPrice = pricing[vehicleType].daily * exchangeRates[selectedCurrency];
    const monthlyPrice = pricing[vehicleType].monthly * exchangeRates[selectedCurrency];
    const yearlyPrice = pricing[vehicleType].yearly * exchangeRates[selectedCurrency];

    let currencySymbol = '';

    switch (selectedCurrency) {
        case 'INR':
            currencySymbol = '₹';
            break;
        case 'USD':
            currencySymbol = '$';
            break;
        case 'YEN':
            currencySymbol = '¥';
            break;
    }

    document.getElementById('dailyPrice')!.textContent = `${currencySymbol}${dailyPrice.toFixed(2)}`;
    document.getElementById('monthlyPrice')!.textContent = `${currencySymbol}${monthlyPrice.toFixed(2)}`;
    document.getElementById('yearlyPrice')!.textContent = `${currencySymbol}${yearlyPrice.toFixed(2)}`;
}

const passOptions = document.querySelectorAll('.pass-option') as NodeListOf<HTMLDivElement>;
const getPassBtn = document.getElementById('getPassBtn') as HTMLButtonElement;

passOptions.forEach(option => {
    option.addEventListener('click', function () {
        passOptions.forEach(opt => opt.classList.remove('selected'));

        this.classList.add('selected');

        const passType = this.getAttribute('data-pass-type') as string;
        userData.pass.type = passType;

        const vehicleType = userData.vehicle.type;
        userData.pass.price = pricing[vehicleType][passType];

        getPassBtn.disabled = false;
    });
});

getPassBtn.addEventListener('click', () => {
    showPassSummary();
});

function showPassSummary(): void {
    document.getElementById('passSelection')?.classList.add('hidden');
    document.getElementById('passSummary')?.classList.remove('hidden');

    document.getElementById('summaryName')!.textContent = userData.employee.fullName;
    document.getElementById('summaryVehicle')!.textContent = `${userData.vehicle.name} (${userData.vehicle.type})`;
    document.getElementById('summaryPassType')!.textContent = userData.pass.type.charAt(0).toUpperCase() + userData.pass.type.slice(1);

    const selectedCurrency = userData.pass.currency;
    const price = userData.pass.price * exchangeRates[selectedCurrency];

    let currencySymbol = '';

    switch (selectedCurrency) {
        case 'INR':
            currencySymbol = '₹';
            break;
        case 'USD':
            currencySymbol = '$';
            break;
        case 'YEN':
            currencySymbol = '¥';
            break;
    }

    document.getElementById('summaryPrice')!.textContent = `${currencySymbol}${price.toFixed(2)}`;
    document.getElementById('summaryCurrency')!.textContent = selectedCurrency;
}