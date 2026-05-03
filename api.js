/* SNAPTT - PRIVATE API HANDLER 
   Copyright 2026 DickoDevz
*/

const BASE_URL = "https://api.nexray.eu.cc/downloader/tiktok?url=";

// Fungsi Ambil Data TikTok
async function fetchTikTok(url) {
    const res = await fetch(BASE_URL + encodeURIComponent(url));
    return await res.json();
}

// Fungsi Download File
async function triggerDownload(fileUrl, ext) {
    try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = `SNAPTT_${Date.now()}.${ext}`;
        document.body.appendChild(a);
        a.click();
        
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(blobUrl);
        }, 2000);
        return true;
    } catch (e) {
        // Fallback jika kena blokir browser (CORS)
        window.open(fileUrl, '_blank');
        return false;
    }
}
