function search() {
    let section = document.getElementById("resultados-pesquisa")
    
    let searchInput = document.getElementById("search-input").value
    
    if (searchInput == "") {
        section.innerHTML = "aqui e o patrick"
        return
    }

    let resultados = "";
    
    for (let dado of dados) {
        if (dado.title.toLowerCase().includes(searchInput.toLowerCase()) || 
            dado.description.toLowerCase().includes(searchInput.toLowerCase()) ||
            dado.tags.toLowerCase().includes(searchInput.toLowerCase())){

        resultados += `
        <div class="item-resultado">
                        <h2>
                            <a href="#" target="_blank">${dado.title}</a>
                        </h2>
                        <P class="descricao-meta">${dado.description}</P>
                        <a href=${dado.link} target="_blanks">More information</a>
                    </div>
        `
        }
    }
    
    if (!resultados) {
        resultados = "<p>aqui e o patrick</p>"
    }
    section.innerHTML =  resultados    
}

