document.addEventListener("DOMContentLoaded", () => {
    const welcomeContainer = document.getElementById("welcome-container");
    const mainContainer = document.getElementById("main-container");
    const getStartedButton = document.getElementById("get-started");
    const calculateButton = document.getElementById("calculate");
    const exitButton = document.getElementById("exit");

    // Show welcome message
    welcomeContainer.style.opacity = "1";
    welcomeContainer.style.transform = "translateY(0)";

    // Get Started button click event
    getStartedButton.addEventListener("click", () => {
        welcomeContainer.style.transition = "opacity 2s, transform 2s";
        welcomeContainer.style.opacity = "0";
        welcomeContainer.style.transform = "translateY(-100px)";
        mainContainer.classList.remove("hidden");
        mainContainer.classList.add("visible");
        mainContainer.style.opacity = "1";
        mainContainer.style.pointerEvents = "auto"; // Enable pointer events for main container
    });

    // Populate year dropdown
    const yearDropdown = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearDropdown.appendChild(option);
    }

    // Populate month dropdown
    const monthDropdown = document.getElementById("month");
    for (let month = 1; month <= 12; month++) {
        const option = document.createElement("option");
        option.value = month;
        option.textContent = month < 10 ? "0" + month : month;
        monthDropdown.appendChild(option);
    }

    // Populate day dropdown
    const dayDropdown = document.getElementById("day");
    for (let day = 1; day <= 31; day++) {
        const option = document.createElement("option");
        option.value = day;
        option.textContent = day < 10 ? "0" + day : day;
        dayDropdown.appendChild(option);
    }

    // Calculate button click event
    calculateButton.addEventListener("click", () => {
        calculateAge();
    });

    // Exit button click event
    exitButton.addEventListener("click", () => {
        // Hide the main container and show the welcome container
        mainContainer.classList.add("hidden");
        welcomeContainer.style.opacity = "1";
        welcomeContainer.style.transform = "translateY(0)";
    });

    // Function to calculate age and next birthday
    function calculateAge() {
        const year = parseInt(document.getElementById("year").value);
        const month = parseInt(document.getElementById("month").value);
        const day = parseInt(document.getElementById("day").value);

        const birthDate = new Date(year, month - 1, day);
        const currentDate = new Date();

        const diff = currentDate - birthDate;
        const ageDate = new Date(diff);

        const years = Math.abs(ageDate.getUTCFullYear() - 1970);
        const months = ageDate.getUTCMonth();
        const days = ageDate.getUTCDate() - 1;

        // Calculate next birthday
        const nextBirthday = new Date(currentDate.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate());
        const monthsUntilNextBirthday = (nextBirthday.getMonth() + 12 - currentDate.getMonth()) % 12;

        const result = document.getElementById("result");
        const nextBirthdayResult = document.getElementById("next-birthday");
        result.innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
        nextBirthdayResult.innerHTML = `Your next birthday is in ${monthsUntilNextBirthday} months.`;
    }
});
