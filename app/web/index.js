var gitOps = require("../core/git-ops");

function initButtons() {
    var addButton = document.querySelector("#git-add");
    var statusButton = document.querySelector("#git-status");
    var pushButton = document.querySelector("#git-push");
    var pullButton = document.querySelector("#git-pull");
    var cloneButton = document.querySelector("#git-clone");
    var commitButton = document.querySelector("#git-commit");

    addButton.onclick = function () {
        gitOps.add(".", function(err, data) {
            if (err) console.log(err);
            console.log(data);
        });
    };

    statusButton.onclick = function () {
        gitOps.status(".", function(err, data) {
            if (err) console.log(err);
            console.log(data);
        });
    };

    pushButton.onclick = function () {
        gitOps.push(".", function(err, data) {
            if (err) console.log(err);
            console.log(data);
        });
    };

    pullButton.onclick = function () {
        gitOps.pull(".", function(err, data) {
            if (err) console.log(err);
            console.log(data);
        });
    };

    cloneButton.onclick = function () {
        gitOps.clone(".", function(err, data) {
            if (err) console.log(err);
            console.log(data);
        });
    };

    commitButton.onclick = function () {
        gitOps.commit(".", function(err, data) {
            if (err) console.log(err);
            console.log(data);
        });
    };
}

initButtons();
