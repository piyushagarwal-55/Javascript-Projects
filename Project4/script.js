let employees = JSON.parse(localStorage.getItem("employees")) || [];

$(function () {
    $("#joinDate").datepicker({
        dateFormat: 'yy-mm-dd',
        maxDate: 0,
        changeMonth: true,
        changeYear: true,
        yearRange: "2000:2024"
    
    });
   
});

function addEmployee() {
    const id = document.getElementById("empID").value.trim();
    const name = document.getElementById("empName").value.trim();
    const age = document.getElementById("empAge").value.trim();
    const department = document.getElementById("empDept").value.trim();
    const joinDate = document.getElementById("joinDate").value.trim();
    const salary = parseFloat(document.getElementById("empSalary").value.trim());

    if (!id || !name || !age || !department || !joinDate || isNaN(salary)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const today = new Date();
    const selectedDate = new Date(joinDate);

    if (selectedDate > today) {
        alert("Joining date cannot be greater than today's date.");
        return;
    }

    if (employees.some(emp => emp.id === id)) {
        alert("Employee ID already exists!");
        return;
    }

    employees.push({ id, name, age, department, joinDate, salary });
    saveToLocalStorage();
    alert("Employee added successfully!");
    displayEmployees();
    clearInputs();
}

function displayEmployees() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    employees.forEach(emp => {
        const row = `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.joinDate}</td>
                <td>${emp.salary.toFixed(2)}</td>
            </tr>
        `;
        tableBody.insertAdjacentHTML("beforeend", row);
    });
}

function searchEmployee() {
    const searchInput = document.getElementById("searchInput").value.trim();
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    if (searchInput === "") {
        displayEmployees();
    } else {
        const result = employees.filter(emp => emp.id === searchInput);
        if (result.length > 0) {
            result.forEach(emp => {
                const row = `
                    <tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.age}</td>
                        <td>${emp.department}</td>
                        <td>${emp.joinDate}</td>
                        <td>${emp.salary.toFixed(2)}</td>
                    </tr>
                `;
                tableBody.insertAdjacentHTML("beforeend", row);
            });
        } else {
            tableBody.innerHTML = "<tr><td colspan='6'>No user present</td></tr>";
        }
    }
}

function updateSalary() {
    const id = prompt("Enter Employee ID to update salary:");
    const emp = employees.find(e => e.id === id);

    if (!emp) {
        alert("No employee found with that ID.");
        return;
    }

    const hikePercentage = prompt("Enter the percentage to increase salary:");
    const percentage = parseFloat(hikePercentage);

    if (isNaN(percentage) || percentage <= 0) {
        alert("Please enter a valid percentage.");
        return;
    }

    emp.salary += (emp.salary * (percentage / 100));
    saveToLocalStorage();
    alert(`Salary updated successfully! New Salary: ${emp.salary.toFixed(2)}`);
    displayEmployees();
}

function removeEmployee() {
    const empID = prompt("Enter Employee ID to remove:");

    const empIndex = employees.findIndex(emp => emp.id === empID);

    if (empIndex === -1) {
        alert("Employee not found!");
        return;
    }

    employees.splice(empIndex, 1);
    saveToLocalStorage();
    alert("Employee removed successfully!");
    displayEmployees();
}

function saveToLocalStorage() {
    localStorage.setItem("employees", JSON.stringify(employees));
}

function clearInputs() {
    document.getElementById("empID").value = "";
    document.getElementById("empName").value = "";
    document.getElementById("empAge").value = "";
    document.getElementById("empDept").value = "";
    document.getElementById("joinDate").value = "";
    document.getElementById("empSalary").value = "";
}
