const _0x4421 = [
    'https://api.nexray.eu.cc/downloader/tiktok?url=', 
    'GET',                                            
    'application/json',                               
    'SNAPTT_dckodevz_'                                         
];

async function fetchTikTok(_0xinput) {
    try {
        const _0xtarget = _0x4421[0] + encodeURIComponent(_0xinput);
        const _0xres = await fetch(_0xtarget, {
            method: _0x4421[1],
            headers: {
                'Accept': _0x4421[2]
            }
        });

        if (!_0xres.ok) return { status: false };
        const _0xdata = await _0xres.json();
        return _0xdata;

    } catch (_0xerr) {
        return { status: false };
    }
}

async function triggerDownload(_0xurl, _0xext) {
    try {
        const _0xresp = await fetch(_0xurl);
        const _0xblob = await _0xresp.blob();
        const _0xobj = window.URL.createObjectURL(_0xblob);
        const _0xlink = document.createElement('a');
        _0xlink.href = _0xobj;
        _0xlink.download = _0x4421[3] + Date.now() + '.' + _0xext;
        document.body.appendChild(_0xlink);
        _0xlink.click();
        setTimeout(() => {
            document.body.removeChild(_0xlink);
            window.URL.revokeObjectURL(_0xobj);
        }, 2000);
        return true;
    } catch (e) {
        window.open(_0xurl, '_blank');
        return false;
    }
}
