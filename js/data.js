const base_url = "https://api.football-data.org/v2/";
// Blok kode yang akan di panggil jika fetch berhasil
function status(response) {
    if (response.status !== 200) {
        console.log("Error : " + response.status);
        // Method reject() akan membuat blok catch terpanggil
        return Promise.reject(new Error(response.statusText));
    } else {
        // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
        return Promise.resolve(response);
    }
}
// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
    return response.json();
}
// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
    // Parameter error berasal dari Promise.reject()
    console.log("Error : " + error);
}


//Mendapatkan competisi
function getCompetitions() {

    if ('caches' in window) {
        caches.match(base_url + 'competitions/2003/standings')
            .then(response => {
                if (response) {
                    response.json().then(data => {
                        let standingsHTML = "";
                        standingsHTML += ` 
                
                         <div class="row center-align">
                        <div class="col s12 m12">
                            <img class="responsive-img" src="/asset/bundesliga.png" alt="logo">
                            <h2>German (BUNDES LIGA 2002)<h2>
                        </div>
                        <div class="col s12 m12">
                            <h3>Info Standings<h3>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col s6 m6">
                            <div class="row">
                                <div class="col s1 m1">
                                    <h6>No</h6>
                                </div>
                                <div class="col s8 m8">
                                    <h6 style="margin-left: 20px;">Club</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col s1 m1 ">
                            <h6>M</h6>
                        </div>
                        <div class="col s1 m1">
                            <h6>W</h6>
                        </div>
                        <div class="col s1 m1">
                            <h6>D</h6>
                        </div>
                        <div class="col s1 m1">
                            <h6>L</h6>
                        </div>
                        <div class="col s1 m1">
                            <h6>point</h6>
                        </div>
                    </div>
                `
                        data.standings[0].table.forEach(function (result) {
                            standingsHTML += `
                                    <style>
                                        .nameTim{
                                            position:absolute;
                                            left:30px;
                                        }
                                    </style>
                                 <div class="row" >
                                 <div class="col s6 m6">
                                 
                                    <div class="row">
                                    <a  href="./infoTeam.html?id=${result.team.id}" style=" text-decoration: none; color:black;">
                                        <div class="col s1 m1"><p>${result.position}</p></div>
                                        <div class="col s2 m2"><img style="width:40px; margin-left:20px;" src="${result.team.crestUrl}"></div>
                                        <div class="col s9 m9">
                                        <p class="nameTim">${result.team.name}</p>
                                        </div>
                                        </a>
                                    </div>
                                    
                                    </div>
                                    <div class="col s1 m1 ">
                                        <p>${result.playedGames}</p>
                                    </div>
                                    <div class="col s1 m1">
                                        <p>${result.won}</p>
                                    </div>
                                    <div class="col s1 m1">
                                        <p>${result.draw}</p>
                                    </div>
                                    <div class="col s1 m1">
                                        <p>${result.lost}</p>
                                    </div>
                                    <div class="col s1 m1">
                                        <p>${result.points}</p>
                                    </div>
                                    </div>
                                    `;

                        });
                        // Sisipkan komponen card ke dalam elemen dengan id #content
                        document.getElementById("standings").innerHTML = standingsHTML;
                    })
                }
            })
    }



const fetchApi = url =>{
    return fetch(url,{
        headers: {
            "X-Auth-Token": "c8a3d0bf64144b7f8dd5dd810ac6095e"
        }
    });
};
//diganti expression
    fetch(base_url + 'competitions/2003/standings', {
        headers: {
            "X-Auth-Token": "c8a3d0bf64144b7f8dd5dd810ac6095e"
        }
    })
        .then(status)
        .then(json)
        .then(data => {

            let standingsHTML = "";
            standingsHTML += ` 
    
             <div class="row center-align">
            <div class="col s12 m12">
                <img class="responsive-img" src="/asset/bundesliga.png" alt="logo">
                <h2>German (BUNDES LIGA 2002)<h2>
            </div>
            <div class="col s12 m12">
            <h3>Info Standings<h3>
            </div>
        </div>
        <div class="row ">
            <div class="col s6 m6">
                <div class="row">
                    <div class="col s1 m1">
                        <h6>No</h6>
                    </div>
                    <div class="col s8 m8">
                        <h6 style="margin-left: 20px;">Club</h6>
                    </div>
                </div>
            </div>
            <div class="col s1 m1 ">
                <h6>M</h6>
            </div>
            <div class="col s1 m1">
                <h6>W</h6>
            </div>
            <div class="col s1 m1">
                <h6>D</h6>
            </div>
            <div class="col s1 m1">
                <h6>L</h6>
            </div>
            <div class="col s1 m1">
                <h6>point</h6>
            </div>
        </div>
    `
            data.standings[0].table.forEach(function (result) {
                standingsHTML += `
                <style>
                .nameTim{
                    position:absolute;
                    left:30px;
                }
            </style>
                     <div class="row" >
                     <div class="col s6 m6">
                     
                        <div class="row">
                        <a  href="./infoTeam.html?id=${result.team.id}" style=" text-decoration: none; color:black;">
                            <div class="col s1 m1"><p>${result.position}</p></div>
                            <div class="col s2 m2"><img style="width:40px; margin-left:20px;" src="${result.team.crestUrl}"></div>
                            <div class="col s9 m9">
                            <p class="nameTim">${result.team.name}</p>
                            </div>
                            </a>
                        </div>
                        
                        </div>
                        <div class="col s1 m1 ">
                            <p>${result.playedGames}</p>
                        </div>
                        <div class="col s1 m1">
                            <p>${result.won}</p>
                        </div>
                        <div class="col s1 m1">
                            <p>${result.draw}</p>
                        </div>
                        <div class="col s1 m1">
                            <p>${result.lost}</p>
                        </div>
                        <div class="col s1 m1">
                            <p>${result.points}</p>
                        </div>
                        </div >
        `;

            });
            // Sisipkan komponen card ke dalam elemen dengan id #content
            document.getElementById("standings").innerHTML = standingsHTML;
        })
        .catch(error);
}

//mendapatkan team dengan id
function getTeamById() {
    return new Promise(function (resolve, reject) {
        const urlParams = new URLSearchParams(window.location.search);
        const idParam = urlParams.get("id");

        if ("caches" in window) {
            caches.match(base_url + 'teams/' + idParam).then(function (response) {
                if (response) {
                    response.json().then(data => {
                        let teamHTML = "";
                        teamHTML += `
                <div class="row center-align" >
                    <div class="col s12 m12">
                        <img style="width:150px;" src="${data.crestUrl}" alt="logo">
                    </div>
                    <div class="col s12 m12">
                        <h4>${data.name}</h4>
                        <h6>(${data.shortName})</h6>
                    </div>
                </div>
                <div class="row ">
                    <div class="col s1 m1">
                        <h6>No</h6>
                    </div>
                    <div class="col s4 m4">
                        <h6>Name</h6>
                    </div>
                    <div class="col s4 m4">
                    <h6>Nationality</h6>
                    </div>
                    <div class="col s3 m3">
                        <h6>Position</h6>
                    </div>
                </div>
                <hr style="width:98%;">`;

                        data.squad.forEach((squad, index) => {


                            teamHTML += `
                    <div class="row">   
                    <div class="col s1 m1">
                        <p>${index + 1}</p>
                    </div>
                    <div class="col s4 m4">
                        <p>${squad.name}</p>
                    </div>
                    <div class="col s4 m4">
                    <p>${squad.nationality}</p>
                    </div>
                    <div class="col s3 m3">
                        <p>${squad.position}</p>
                    </div>
                </div>`;
                        })

                        document.getElementById("infoTeam").innerHTML = teamHTML;

                        resolve(data);
                    });
                }
            });
        }


        fetch(base_url + 'teams/' + idParam, {
            headers: {
                "X-Auth-Token": "c8a3d0bf64144b7f8dd5dd810ac6095e"
            }
        })
            .then(status)
            .then(json)
            .then(data => {

                let teamHTML = "";
                teamHTML += `
            <div class="row center-align" >
                <div class="col s12 m12">
                    <img style="width:150px;" src="${data.crestUrl}" alt="logo">
                </div>
                <div class="col s12 m12">
                    <h4>${data.name}</h4>
                    <h6>(${data.shortName})</h6>
                </div>
            </div>
            <div class="row ">
                <div class="col s1 m1">
                    <h6>No</h6>
                </div>
                <div class="col s4 m4">
                    <h6>Name</h6>
                </div>
                <div class="col s4 m4">
                <h6>Nationality</h6>
                </div>
                <div class="col s3 m3">
                    <h6>Position</h6>
                </div>
            </div>
            <hr style="width:98%;">`;

                data.squad.forEach((squad, index) => {


                    teamHTML += `
                <div class="row">   
                <div class="col s1 m1">
                    <p>${index + 1}</p>
                </div>
                <div class="col s4 m4">
                    <p>${squad.name}</p>
                </div>
                <div class="col s4 m4">
                <p>${squad.nationality}</p>
                </div>
                <div class="col s3 m3">
                    <p>${squad.position}</p>
                </div>
            </div>`;
                })
                // Sisipkan komponen card ke dalam elemen dengan id #content
                document.getElementById("infoTeam").innerHTML = teamHTML;
                resolve(data);
            })
            .catch(error);


    });


}

//menyimpan team 
function getSavedTeams() {
    getAll().then(teams => {
        console.log(teams);
        // Menyusun komponen card artikel secara dinamis
        let teamsHTML = "";
        teams.forEach((team, index) => {
            teamsHTML += `
           
                    <div class="row">
                    <a  href="./infoTeam.html?id=${team.id}&saved=true" style=" text-decoration: none; color:black;">
                   
                    <div class="col s2 m2">
                    <p style="margin-left: 20px;">${index + 1}</p>
                    </div>
                    <div class="col s2 m2"><img style="width:40px;" src="${team.crestUrl}"></div>
                    <div class="col s8 m8">
                    <p style="margin-left: 20px;">${team.name}</p>
                    </div>
                    </a>                      
                    </div>
                    
                   
                  `;
        });

        // Sisipkan komponen card ke dalam elemen dengan id #body-content
        document.getElementById("teams").innerHTML = teamsHTML;
       
    });
}

//meyimpan tim dengan id
function getSavedTeamById() {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get("id");

    getById(parseInt(idParam)).then(data => {

        let teamHTML = "";
        teamHTML += `
            <div class="row center-align" >
                <div class="col s12 m12">
                    <img style="width:150px;" src="${data.crestUrl}" alt="logo">
                </div>
                <div class="col s12 m12">
                    <h4>${data.name}</h4>
                    <h6>(${data.shortName})</h6>
                </div>
            </div>
            <div class="row ">
                <div class="col s1 m1">
                    <h6>No</h6>
                </div>
                <div class="col s4 m4">
                    <h6>Name</h6>
                </div>
                <div class="col s4 m4">
                <h6>Nationality</h6>
                </div>
                <div class="col s3 m3">
                    <h6>Position</h6>
                </div>
            </div>
            <hr style="width:98%;">`;

        data.squad.forEach((squad, index) => {


            teamHTML += `
                <div class="row">   
                <div class="col s1 m1">
                    <p>${index + 1}</p>
                </div>
                <div class="col s4 m4">
                    <p>${squad.name}</p>
                </div>
                <div class="col s4 m4">
                <p>${squad.nationality}</p>
                </div>
                <div class="col s3 m3">
                    <p>${squad.position}</p>
                </div>
            </div>`;
        })
        // Sisipkan komponen card ke dalam elemen dengan id #content
        document.getElementById("infoTeam").innerHTML = teamHTML;
        
    });
}

//delete team
function deleteTeamById() {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get("id");

    deleteById(parseInt(idParam))
}