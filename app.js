const searchPlayers = () => {
    const searchValue = document.getElementById('search-feild').value
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))

}