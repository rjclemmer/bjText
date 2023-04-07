const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// TODO: Add an event handler to the `beforeinstallprompt` event

// This event is fired by the browser when a PWA can be installed
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the event object in a global variable for later use
    window.deferredPrompt = event;
    // Make the install button visible by removing the 'hidden' class
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element

// This event handler is triggered when the install button is clicked
butInstall.addEventListener('click', async () => {
    // Retrieve the deferredPrompt event object from the global variable
    const promptEvent = window.deferredPrompt;

    // If the deferredPrompt event object is not available, return
    if (!promptEvent) {
        return;
    }

    // Show the installation prompt to the user
    promptEvent.prompt();
    // Reset the global variable holding the deferredPrompt event object
    window.deferredPrompt = null;
    // Hide the install button by adding the 'hidden' class
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add a handler for the `appinstalled` event

// This event is fired by the browser when the PWA is successfully installed
window.addEventListener('appinstalled', (event) => {
    // Reset the global variable holding the deferredPrompt event object
    window.deferredPrompt = null;
});
