const display=document.getElementById("section-four_componentB")
const prevIcon="https://res.cloudinary.com/du0mikmrp/image/upload/v1698912348/home%20page/sdtcyv9wkqaexoaiqbcd.svg"
const nextIcon="https://res.cloudinary.com/du0mikmrp/image/upload/v1699092737/2_eh1fsn.svg"
const day = document.querySelector('.day');
const time = document.querySelector('.time');

const news=[
        "Gunmen Kidnap RSBC News Director Anthony-Nwokocha (Photo)",
       "FIFA Women's World Cup : Obi Hails Super Falcons' Fighting Spirit In Draw Vs Canada",
       "Fuel Hike: Public Complaints Company Adjusts Work Schedule",
       "Insecurity: Tinubu Vows To Use State Power To Secure Nigerians",
       "Fuel Price Hike: Lagos Workers Adopt Shift Operations; Residents Lament Plights",
       "Subsidy: Endure, Tinubu Repositioning The Country – Keyamo Tells Nigerians",
       "OPC Member NURTW Official Fight Over Paternity of 11-Year-Old Girl (pics) ",
       "Obi Failure to Electronically Transmit Results Nullifies Presidential Election",
       "Tuition Hike: Nigerian Students To Embark On Mass Protest",
       "Davido's Protege, Logos Olori's New Video Causes Controversy",
       "Peter Obi Hails Nigerian Lady Who Retuned Misplaced $70,000 To The Owner",
       "Goodluck Jonathan Joins World Leaders At International Leadership Conference (photos) ",
       "‘APC Used Me’- Comedian, Mr Jollof Laments",
       "LP: We Regret Making Peter Obi Our Presidential Candidate – Apapa Faction",
       "Why Many Young Nigerians Are Not In Relationships",
       "Kashim Shettima And Muhammadu Buhari At Governor Zulum's Son's Wedding(photos) ",
       "Boiling Your Meat Well Does Not Kill Anthrax - Expert Warns Nigerians",
       "Leave it or I'll Pelt You With Stones- Ilorin Cleric Attacks Osun Priestess, Worshippers ",
       "Tinubu To Tribunal: Obi/LP's Petition, Final Written Address Is Fiction",
        "Troops Sack IPOB/ESN Enclave Asaba, Capture Fighter, Fire Arms(Photos)",
        "Persistent Headache!",
        "Lebron James, Serena Williams, Tom Brady, Kim K. Attend Messi's Miami Debut Match",
        "Int’l Travels: Airfares Hit Rooftop In  Nigeria As Ghanaians, Others Pay Less ",
        "Benin Republic Slams CFA 2M On Nigeria Cargoes In Retaliation For Border Closure",
        "10 Tips For Driving In The Rain",
        "Things They Will Not Tell You About Marriage",
        "A Mother's Painful Emotional Tribute To Her Dead Twin Sons",
        "Messi Scored A Sensational Free-Kick To Seal 2-1 Win for Inter Miami On Debut",
        "Growing Menance Of Poison Among Friends At Beer Parlours",
        "If You Are In Your Twenties (20s) This is For You...",
        "She'd Rather End The Relationship Than Leave Her Male Bestie"
    ]

const showNews=()=>{
    news.forEach((item)=>{
        display.innerHTML+=`
        <div id="news-component">
        <img src=${prevIcon} id="icon">
        <p>${item}</p>
        <img src=${nextIcon} id="icon">
        </div>
        `
    })
}

showNews()

//const now = Date.now();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();
const thisDay = date.getDay();
const thisMonth = date.getMonth();
const thisDate = `${days[thisDay]} ${date.getDate()} ${months[thisMonth]} ${date.getFullYear()}`

const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
const minute = date.getMinutes < 10 ? `0${date.getMinutes()}` : date.getMinutes();
const thisTime = `${hour - 12}:${minute}${date.getHours() < 12 ? 'am' : 'pm'}`;

day.textContent = thisDate;
time.textContent = thisTime;