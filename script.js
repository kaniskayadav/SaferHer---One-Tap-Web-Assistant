const familyNumbers = ['9238669629']; // APNA NUMBER!

// BACK BUTTON
document.getElementById('backBtn').onclick = () => {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById('homeScreen').style.display = 'block';
    document.getElementById('mainTitle').innerText = '🚨 SafeHer Emergency';
    document.getElementById('backBtn').style.display = 'none';
};

// PHASE 1: SOS (WhatsApp tab - same)
document.getElementById('sosBtn').onclick = () => {
    document.getElementById('status').innerText = '🚨 Sending SOS...';
    navigator.geolocation.getCurrentPosition(pos => {
        let lat = pos.coords.latitude, lng = pos.coords.longitude;
        document.getElementById('status').innerText = `✅ SOS Sent! ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
        let msg = `🚨 EMERGENCY! https://maps.google.com/?q=${lat},${lng}`;
        familyNumbers.forEach(num => window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`));
        setTimeout(() => window.open('tel:112', '_blank'), 1000);
    });
};

// PHASE 2: MAP (Same page + back button)
document.getElementById('mapBtn').onclick = () => {
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('mapScreen').style.display = 'block';
    document.getElementById('mainTitle').innerText = '🗺️ Safety Map';
    document.getElementById('backBtn').style.display = 'block';
    
    navigator.geolocation.getCurrentPosition(pos => {
        document.getElementById('map').innerHTML = `
            <iframe width="100%" height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500!2d${pos.coords.longitude}!3d${pos.coords.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2z${pos.coords.latitude},${pos.coords.longitude}!5e0!3m2!1sen!2sin!4v1630000000000" allowfullscreen></iframe>
        `;
        document.getElementById('safetyScore').innerHTML = `🟢 SAFE 85%`;
    });
};

// PHASE 3: MESH
document.getElementById('meshBtn').onclick = () => {
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('meshScreen').style.display = 'block';
    document.getElementById('mainTitle').innerText = '📡 Offline Mesh';
    document.getElementById('backBtn').style.display = 'block';
    
    document.getElementById('meshStatus').innerText = '📡 Scanning nearby users...';
    setTimeout(() => {
        document.getElementById('meshStatus').innerText = '✅ SOS sent to 10 nearby users!';
        document.getElementById('nearbyUsers').innerHTML = `
            <div style="background:rgba(255,255,255,0.2);padding:15px;border-radius:10px;">
                • Ayesha (150m) ✅<br>• Ali (300m) ✅<br>• Fatima (450m) ✅
            </div>
        `;
    }, 2000);
};

// PHASE 4: POLICE
document.getElementById('policeBtn').onclick = () => {
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('policeScreen').style.display = 'block';
    document.getElementById('mainTitle').innerText = '🚔 Police Dashboard';
    document.getElementById('backBtn').style.display = 'block';
    
    document.getElementById('policeStatus').innerText = '📡 Dispatching...';
    setTimeout(() => {
        document.getElementById('policeStatus').innerText = '✅ Case Assigned: PS Local';
        document.getElementById('policeTracking').innerHTML = `
            <div style="background:#333;padding:20px;border-radius:15px;">
                🚓 ETA: 4:32 min | <div style="width:75%;height:12px;background:#4CAF50;display:inline-block;"></div>
            </div>
        `;
        document.getElementById('responseStats').innerHTML = `
            <div style="display:flex;justify-content:space-around;background:rgba(255,255,255,0.1);padding:15px;">
                ⏱️ 6:18 avg | 📊 23 cases | ✅ 89%
            </div>
        `;
    }, 1500);
};
// 🔥 SPLASH SCREEN (2.5 sec beauty)
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splashScreen').style.display = 'none';
    }, 2500);
});

document.addEventListener('DOMContentLoaded', () => {
    // 🔥 FAKE CALL BUTTON
    const fakeCallBtn = document.getElementById('fakeCallBtn');
    if(fakeCallBtn) {
        fakeCallBtn.addEventListener('click', () => {
            document.getElementById('homeScreen').style.display = 'none';
            document.getElementById('fakeCallScreen').style.display = 'block';
            
            const callerLabel = document.getElementById('callerLabel');
            const callTimer = document.getElementById('callTimer');
            callerLabel.textContent = 'Calling Papa…';
            callTimer.textContent = 'Ringing…';
            
            setTimeout(() => {
                callerLabel.textContent = 'Incoming call…';
                callTimer.textContent = '00:00';
                setupFakeCallButtons();
            }, 3000);
        });
    }
    
    // TUMHARE BAQI BUTTONS YAHAN (voiceBtn, mapBtn, policeBtn)
    // Tumhara original code same copy-paste kar do
});

function setupFakeCallButtons() {
    let seconds = 0;
    
    document.getElementById('rejectCall').onclick = () => {
        document.getElementById('callerLabel').textContent = 'Call declined';
        setTimeout(() => {
            document.getElementById('homeScreen').style.display = 'block';
            document.getElementById('fakeCallScreen').style.display = 'none';
        }, 1500);
    };
    
    document.getElementById('acceptCall').onclick = () => {
        document.getElementById('callerLabel').textContent = 'On call with Papa';
        setInterval(() => {
            seconds++;
            document.getElementById('callTimer').textContent = 
                `${Math.floor(seconds/60).toString().padStart(2,'0')}:${(seconds%60).toString().padStart(2,'0')}`;
        }, 1000);
    };
}
