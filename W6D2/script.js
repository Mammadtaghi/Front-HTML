let box = document.getElementById("box1")
// console.log(box); // 1

// box.onclick = () => {
    // alert("You just clicked this box") // 2
    // box.classList.toggle("makeBig") // 5
    // box.style.backgroundColor = "blue" // 3
    // box.classList.add("shrink") //4
// }
 
// alert(document.getElementsByClassName("square")[0].innerHTML) // 6

// console.log(document.getElementsByClassName("noidea")); //7

let el = document.querySelectorAll(".noidea")

el.forEach(x => x.onclick = () => console.log(x.innerHTML)) // 8



