/* SNAPTT - PRIVATE ENGINE 
   Copyright 2026 DickoDevz
*/

(function() {
    // URL API disembunyikan menggunakan Base64 (aHR0cHM6...)
    // Ini diterjemahkan menjadi: https://api.nexray.eu.cc/downloader/tiktok?url=
    const _0x1a2b = "aHR0cHM6Ly9hcGkubmV4cmF5LmV1LmNjL2Rvd25sb2FkZXIvdGlrdG9rP3VybD0=";
    const _decode = (s) => atob(s);

    // Fungsi Ambil Data TikTok (Protected)
    window.fetchTikTok = async function(_inputUrl) {
        try {
            const _endpoint = _decode(_0x1a2b) + encodeURIComponent(_inputUrl);
            const _response = await fetch(_endpoint, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });

            if (!_response.ok) throw new Error();
            return await _response.json();
        } catch (_err) {
            console.error("Connection Error");
            return { status: false };
        }
    };

    // Fungsi Download (Hardened)
    window.triggerDownload = async function(_file, _ext) {
        try {
            const _res = await fetch(_file);
            const _blob = await _res.blob();
            const _bUrl = window.URL.createObjectURL(_blob);
            
            const _el = document.createElement('a');
            _el.href = _bUrl;
            _el.download = `SNAPTT_${Date.now()}.${_ext}`;
            document.body.appendChild(_el);
            _el.click();
            
            setTimeout(() => {
                document.body.removeChild(_el);
                window.URL.revokeObjectURL(_bUrl);
            }, 2000);
            return true;
        } catch (_e) {
            // Fallback: Jika kena CORS, buka di tab baru agar tetap bisa unduh
            window.open(_file, '_blank');
            return false;
        }
    };
})();
