export async function onRequestPost(context) {
    try {
        const data = await context.request.json();
        const response = await fetch(`https://api.yupra.my.id/api/ai/gpt5?text=${encodeURIComponent(data.message)}`);
        const result = await response.json();
        
        return new Response(JSON.stringify({ result: result.result }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (e) {
        return new Response(JSON.stringify({ result: "Neural connection slow." }));
    }
}
