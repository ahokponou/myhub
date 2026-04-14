import { DEFAULT_ENGINES } from "./engines.js"

export function addEngine() {
    const searchEnginesElt = document.querySelector("#search-engines")
    if (searchEnginesElt) {
        renderEngines(DEFAULT_ENGINES)
    }
}

function renderEngines(engines) {
    const searchEnginesElt = document.querySelector("#search-engines")
    searchEnginesElt.innerHTML = ''
    engines.forEach(engine => {
        const option = document.createElement('option')
        option.value = engine.url
        option.textContent = engine.name
        searchEnginesElt.appendChild(option)
    })
}

export function search() {
    const searchQueryElt = document.querySelector(".search-query")
    const searchButtonElt = document.querySelector(".search-button")
    searchButtonElt.addEventListener('click', doSearch)
    searchQueryElt.addEventListener(
        'keydown', 
        (event) => {
            if (event.key === 'Enter') {
                doSearch()
            }
        }
    )
}

function doSearch() {
    const searchEnginesElt = document.querySelector("#search-engines")
    const searchQueryElt = document.querySelector(".search-query")
    let engine = searchEnginesElt.value
    let query = searchQueryElt.value.trim()
    if (engine != '' && query != '') {
        let url

        if (isQueryUrl(query)) {
            const urlPattern = /(https?:\/\/)[a-zA-Z0-9_.-]+\.[a-z]{2,}/
            url = urlPattern.test(query) ? 
                    query : 
                    'https://' + query
        } else {
            url = engine + '?q=' + encodeURI(query)
        }

        window.open(url, '_blank', 'noopener,noreferrer')
        searchQueryElt.value = ''
    }
}

function isQueryUrl(query) {
    const urlPattern = /^(https?:\/\/)?[a-zA-Z0-9_.-]+\.[a-z]{2,}(\/.*)?$/
    return urlPattern.test(query)
}