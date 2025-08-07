
document.getElementById('eggForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const eggCount = document.getElementById('eggCount').value;
    const type = document.querySelector('input[name="type"]:checked').value;
    const date = new Date().toLocaleDateString();

    const tableBody = document.getElementById('eggTableBody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td class="border-b p-2">${name}</td>
        <td class="border-b p-2">${eggCount}</td>
        <td class="border-b p-2">${type}</td>
        <td class="border-b p-2">${date}</td>
    `;

    tableBody.appendChild(newRow);

    document.getElementById('eggForm').reset();
});
