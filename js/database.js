
const dbPromised = idb.open("football", 1, function (upgradeDb) {
    const teamsObject = upgradeDb.createObjectStore("teams", {
        keyPath: "id"
    });
    teamsObject.createIndex("post_title", "post_title", { unique: false });
});
function saveForLater(team) {
    dbPromised
        .then(function (db) {
            const tx = db.transaction("teams", "readwrite");
            const store = tx.objectStore("teams");
            console.log(team);
            store.put(team);
            return tx.complete;
        })
        .then(function () {
            M.toas({html: 'Tim Favoritemu sekarang bertambah Yeay!!!!.'});
            alert("Tim Favoritemu sekarang bertambah Yeay!!!!.")
        });
}
function getAll() {
    return new Promise(function (resolve, reject) {
        dbPromised
            .then(function (db) {
                const tx = db.transaction("teams", "readonly");
                const store = tx.objectStore("teams");
                return store.getAll();
            })
            .then(teams => {
                resolve(teams);
            });
    });
}
function getById(id) {
    return new Promise(function (resolve, reject) {
        dbPromised
            .then(function (db) {
                const tx = db.transaction("teams", "readonly");
                const store = tx.objectStore("teams");
                return store.get(id);
            })
            .then(team => {
                resolve(team);
            });
    });
}
function deleteById(id) {
    return new Promise(function (resolve, reject) {
        dbPromised
            .then(function (db) {
                const tx = db.transaction("teams", "readwrite");
                const store = tx.objectStore("teams");
                store.delete(id);
                return tx.complete;
            })
            .then(team => {
                resolve(team);
            });
    });
}

