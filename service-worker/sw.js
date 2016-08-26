self.addEventListener('activate',function(data){
    console.log('activated')
})
self.addEventListener('push', function(event) {
  event.waitUntil(
    self.registration.showNotification('Example Notification', {
      body: 'Hello, world!',
    })
  );
})