const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const restore = document.querySelector('.content').innerHTML;

function calculateAge() {
    const bdat = document.getElementById('dob').value;
    console.log(bdat);
    if(bdat == null || bdat == "") {
        alert("Enter Date of Birth!")    
    }
    else {

        const bda = bdat.replaceAll("-", "");
        const by = parseInt(bda.slice(0, 4), 10);
        const bm = parseInt(bda.slice(4, 6), 10);
        const bd = parseInt(bda.slice(6, 8), 10);
    
        let age = year - by;
    
        if (bm > month || (bm === month && bd > day)) {
            age--;
        }
    
        const contentElement = document.querySelector('.content');
        contentElement.innerHTML = `
            <div class="inp">
                <label for="dob">Congrats! You are ${age} years old</label>
            </div>
            <div class="inp Submit">
                <button onclick="restoreContent()">Restore</button>
            </div>`;
    }
}

function restoreContent() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = restore;
}
