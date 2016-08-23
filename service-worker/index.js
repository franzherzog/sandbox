if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').then(function(registration){
        console.log('ServcieWorker register complete',registration.scope)
    }).catch(function(error){
        console.log('error',error)
    })
}

