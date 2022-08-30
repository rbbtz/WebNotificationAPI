
function checkPermission() {
    return Notification.requestPermission()
        .then(status => status === 'granted');
    }
function sendNotification() {
    checkPermission().then(isAllowed => {
        if (!isAllowed) {
            // user denied
            return;
         }
        new Notification('Title', {
          body: '"No person ever steps in the same river twice, for it is not the same river and they are not the same person." — Heraclitus',
        });
       });
    }