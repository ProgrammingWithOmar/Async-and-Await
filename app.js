// async

const fetchUserProfile = async()=>{
    const userId = document.getElementById('userId').value; 
   if(!userId) return;

   try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    console.log(response)


    if(!response.ok){
     throw new Error("Something went wrong", response.statusText)
    }

    const user = await response.json()
    console.log(user)
    displayUser(user)


   }catch(err){
    console.error("Error Fetching user profile",err)
   }
}

function displayUser(user){
    const userCard = document.getElementById('userCard')
    const userName = document.getElementById('userName')
    const userEmail = document.getElementById('userEmail')
    const userCity = document.getElementById('userCity')

    userName.textContent = `Name: ${user.name}`
    userEmail.textContent = `Email: ${user.email}`
    userCity.textContent = `City: ${user.address.city}`
    userCard.classList.remove('hidden')

}