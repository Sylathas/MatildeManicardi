import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

//Check if it's mobile
window.mobileCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

let openProject = 0;

$("#homeWork, #navBarWork, #navBarBottomWork").on("click", function () {
    $("#Home, #About, #Project").css({ 'opacity': 0 });
    setTimeout(() => {
        $("#Home, #About, #Project").css({ 'display': 'none' });
        if (window.mobileCheck()) {
            $("#Work").css({ 'display': 'block' });
        } else {
            $("#Work").css({ 'display': 'flex' });
        }
        $("#navBar").css({ 'display': 'block' });
        if (window.mobileCheck()) {
            $("#navBarBottom").css({ 'display': 'flex' });
        }
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            $("#Work").css({ 'opacity': 1 });
            $("#navBar").css({ 'opacity': 1, 'display': 'block' });
            if (window.mobileCheck()) {
                $("#navBarBottom").css({ 'display': 'flex', 'opacity': '1' });
            }
        }, 100);
    }, 500);
});

$("#homeAbout, #navBarAbout, #navBarBottomAbout").on("click", function () {
    $("#Home, #Work, #Project").css({ 'opacity': 0 });
    setTimeout(() => {
        $("#Home, #Work, #Project").css({ 'display': 'none' });
        $("#About").css({ 'display': 'flex' });
        $("#navBar").css({ 'display': 'block' });
        if (window.mobileCheck()) {
            $("#navBarBottom").css({ 'display': 'flex' });
        }
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            $("#About").css({ 'opacity': 1 });
            $("#navBar").css({ 'opacity': 1 });
            if (window.mobileCheck()) {
                $("#navBarBottom").css({ 'display': 'flex', 'opacity': '1' });
            }
        }, 100);
    }, 500);
});

$("#navBarHome").on("click", function () {
    $("#Work, #About, #navBar, #Project, #navBarBottom").css({ 'opacity': 0 });
    setTimeout(() => {
        $("#Work, #About, #navBar, #Project, #navBarBottom").css({ 'display': 'none' });
        if (window.mobileCheck()) {
            $("#Home").css({ 'display': 'block' });
        } else {
            $("#Home").css({ 'display': 'flex' });
        }

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            $("#Home").css({ 'opacity': 1 });
        }, 100);
    }, 300);
});

$("#projectPageTextLink").on("click", function () {
    window.open(Projects[openProject].link, '_blank');
});

$("#grid").on("click", ".project", function () {
    //Change text
    var id = $(this).attr('id');
    const project = Projects[parseInt(id) - 1];
    openProject = parseInt(id) - 1;
    console.log('url(' + project.image + ');');
    $("#projectPageImage").css({ "background-image": 'url(' + project.image + ')' });
    $("#projectPageTextTitle").text(project.name);
    if (project.credits) {
        $("#projectPageCredits").text(project.credits);
    } else {
        $("#projectPageCredits").css("display", "none");
    }
    if (project.abstract) {
        $("#projectPageTextAbstract").text(project.abstract);
    } else {
        $("#projectPageTextAbstract").css("display", "none");
    }
    if (project.text) {
        $("#projectPageText").text(project.text);
    } else {
        $("#projectPageText").css("display", "none");
    }
    if (!project.link) {
        $("#projectPageTextLink").css("display", "none");
    }
    if (project.type) {
        $("#projectPageType").text(project.type);
    } else {
        $("#projectPageType").css("display", "none");
    }
    //Transition Page
    $("#Home, #Work, #About").css({ 'opacity': 0 });
    setTimeout(() => {
        $("#Home, #Work, #About").css({ 'display': 'none' });
        if (window.mobileCheck()) {
            $("#Project").css({ 'display': 'block' });
        } else {
            $("#Project").css({ 'display': 'flex' });
        }
        $("#navBar").css({ 'display': 'block' });
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            $("#Project").css({ 'opacity': 1 });
            $("#navBar").css({ 'opacity': 1 });
            if (window.mobileCheck()) {
                $("#navBarBottom").css({ 'display': 'flex', 'opacity': '1' });
            }
        }, 100);
    }, 500);
});


//Back-End

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcwssSxb3zUzcZ1aiwTia7OwyAu8Tx_gU",
    authDomain: "matildemanicardi-a7eb3.firebaseapp.com",
    databaseURL: "https://matildemanicardi-a7eb3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "matildemanicardi-a7eb3",
    storageBucket: "matildemanicardi-a7eb3.appspot.com",
    messagingSenderId: "894680331419",
    appId: "1:894680331419:web:e3207f62e16636b532c23e"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

let Projects = [];

class Project {
    constructor(name, abstract, credits, image, link, text, type) {
        this.name = name;
        this.abstract = abstract;
        this.credits = credits;
        this.image = image;
        this.link = link;
        this.text = text;
        this.type = type;
    }
}

//Create Projects
const querySnapshot = await getDocs(collection(db, "projects"));
querySnapshot.forEach((doc) => {
    const name = doc.data().name;
    const abstract = doc.data().abstract;
    const header_credits = doc.data().header_credits;
    const header_image = doc.data().image_header;
    const link = doc.data().link;
    const text = doc.data().textcontent;
    const type = doc.data().type;

    Projects.push(new Project(name, abstract, header_credits, header_image, link, text, type));

    const projectDiv = '<div class="project" id=' + Projects.length + '><div class="projectImageContainer"><div class="projectImage" style="background-image: url(' + header_image + ')"></div></div><h1 class="projectTitle">' + name + '</h1><p class="projectType">' + type + '</p> </div>';
    $("#grid").append(projectDiv);
});

//Add Texts
const querySnapshotTexts = await getDocs(collection(db, "texts"));
querySnapshotTexts.forEach((doc) => {
    $("#intro").text(doc.data().about_bio);
    $("#photo").css({ "background-image": 'url(' + doc.data().bio_image + ')' });
    $("#aboutText").text(doc.data().about_bio);
});