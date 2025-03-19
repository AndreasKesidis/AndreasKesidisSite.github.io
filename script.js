let Technical = document.querySelector('#Technical')
let Creative = document.querySelector('#Creative')



Technical.classList.add("active");
Creative.classList.add("inactive");




const elSection = document.querySelectorAll(".elSection")

const observer = new IntersectionObserver(
    entries =>{entries.forEach(entry => {
        entry.target.classList.toggle("shown", entry.isIntersecting)
    })},
    {
    threshold: 0.25,
    }
    
)

elSection.forEach(elSection => {
    observer.observe(elSection)
})
 





document.getElementById("appendText").innerHTML = "<ul class='ul-col fade-in'><li>HTML5, CSS3, JavaScript, React and Bootstrap Responsive design and web accessibility</li></ul>";


    function appendTextTS() {
        document.getElementById("appendText").innerHTML = "<ul class='ul-col fade-in'> <li>HTML5, CSS3, JavaScript, React and Bootstrap Responsive design and web accessibility</li></ul>";
        Technical.classList.replace("inactive", "active");
        Creative.classList.replace("active", "inactive");
    }

    function appendTextCS() {
        document.getElementById("appendText").innerHTML = "<ul class='ul-col fade-in'> <li>Adobe XD, Adobe Photoshop, Inkscape, Autodesk Maya, Blender</li> <li> Creation, Optimization and Animation of digital assets</li> <li>Product Visualization and Motion Graphics</li></ul>";
        Technical.classList.replace("active", "inactive");
        Creative.classList.replace("inactive", "active");
    }

    document.querySelector(".navbar-icon-ham").addEventListener("click", function(){
        document.querySelector(".navbar-container").style.display = "block";
        document.querySelector(".navbar-icon-ham").style.display = "none";
        document.querySelector(".navbar-icon-x").style.display = "block";



    })

    document.querySelector(".navbar-icon-x").addEventListener("click", function(){
        
        document.querySelector(".navbar-container").style.display = "none";
        document.querySelector(".navbar-icon-ham").style.display = "block";
        document.querySelector(".navbar-icon-x").style.display = "none";

    })

    document.querySelector(".navbar-container").addEventListener("click", function(){
        
        document.querySelector(".navbar-container").style.display = "none";
        document.querySelector(".navbar-icon-ham").style.display = "block";
        document.querySelector(".navbar-icon-x").style.display = "none";

    })

    


    let toEmail = document.querySelector('#contact')

    toEmail.onclick = function () {

        navigator.clipboard.writeText("andreaskesidisthess@gmail.com")
    }

   
