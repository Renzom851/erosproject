let total = 0;
const goal = 10000;

function addDonation(){
    const val = parseFloat(document.getElementById('donationInput').value);
    if(!val) return;
    total += val;
    updateProgress();
}

function updateProgress(){
    const percent = Math.min((total/goal)*100,100);
    document.getElementById('progress').style.width = percent + '%';
    document.getElementById('progress-text').innerText = `$${total} / $${goal}`;
}

function copyAddress(id){
    navigator.clipboard.writeText(document.getElementById(id).innerText);
}

// gallery upload
const input = document.getElementById('galleryInput');

input.addEventListener('change', function(e){
    const container = document.getElementById('galleryContainer');

    for(let file of e.target.files){
        const reader = new FileReader();

        reader.onload = function(){
            const img = document.createElement('img');
            img.src = reader.result;
            container.appendChild(img);
        }

        reader.readAsDataURL(file);
    }
});