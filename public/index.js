const btn = document.getElementById("btn")

btn?.addEventListener("click", async ()=>{
    console.log("hi");
    try {
        const response=await fetch("http://localhost:5000/attendance")
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})