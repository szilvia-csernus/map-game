export const firewall = callback => {
    emailjs.init("sZPW9YDqBsCM52fA-");

    const sendMail = (from, message) => {
        emailjs.send('my-emailjs-service', 'universal-template', {
            "project_name": "Map game project",
            "from_name": from,
            "message": message
        });
    };

    fetch("https://api.countapi.xyz/hit/szilvia-csernus/map-game").then(fetchResponse => {
        if (fetchResponse.status != 200) {
            // error message could be sent from here
        } else {
            fetchResponse.json().then(data => {
                if (data.value > 49000) {
                    window.location.href = '../error.html';
                    return;
                } else if (data.value === 100 || data.value === 2000 || data.value === 20000 || data.value === 49000) {
                    sendMail('Count API', `Map game load number reached ${data.value}`);
                }
                callback();
            });
        }
    });
};