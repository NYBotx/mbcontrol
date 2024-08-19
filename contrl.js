document.addEventListener('DOMContentLoaded', function () {
    const volumeUpButton = document.getElementById('btnVolumeUp');
    const volumeDownButton = document.getElementById('btnVolumeDown');
    const powerButton = document.getElementById('btnPower');

    volumeUpButton.addEventListener('click', function () {
        sendControlSignal('volumeUp');
    });

    volumeDownButton.addEventListener('click', function () {
        sendControlSignal('volumeDown');
    });

    powerButton.addEventListener('click', function () {
        sendControlSignal('power');
    });

    function sendControlSignal(action) {
        fetch(`https://your-server-api.com/control`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ action: action }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});
