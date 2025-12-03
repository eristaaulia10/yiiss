function loadDiary() {
    let data = JSON.parse(localStorage.getItem('diary')) || [];
    let entries = document.getElementById("entries");
    entries.innerHTML = "";

    data.forEach((entry, index) => {
        entries.innerHTML += `
            <div class="entry">
                <span class="delete-btn" onclick="deleteDiary(${index})">Hapus</span>
                <div class="date">${entry.date}</div>
                <p>${entry.text}</p>
            </div>
        `;
    });
}

function saveDiary() {
    let input = document.getElementById("diaryInput").value;

    if (input.trim() === "") {
        alert("Teks tidak boleh kosong!");
        return;
    }

    let data = JSON.parse(localStorage.getItem("diary")) || [];

    let newEntry = {
        text: input,
        date: new Date().toLocaleString("id-ID")
    };

    data.unshift(newEntry);
    localStorage.setItem("diary", JSON.stringify(data));

    document.getElementById("diaryInput").value = "";
    loadDiary();
}

function deleteDiary(index) {
    let data = JSON.parse(localStorage.getItem("diary")) || [];
    data.splice(index, 1);
    localStorage.setItem("diary", JSON.stringify(data));
    loadDiary();
}

window.onload = loadDiary;
