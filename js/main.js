// Main JS - shared utilities

// Copy to clipboard
function copyToClipboard(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
        if (btnElement) {
            const originalText = btnElement.textContent;
            btnElement.textContent = '✓ Copied!';
            btnElement.classList.add('copied');
            setTimeout(() => {
                btnElement.textContent = originalText;
                btnElement.classList.remove('copied');
            }, 2000);
        }
    });
}

// Estimate token count (rough approximation: ~4 chars per token for English, ~2 for Chinese)
function estimateTokens(text) {
    if (!text) return 0;
    // Detect if mostly CJK
    const cjkChars = (text.match(/[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/g) || []).length;
    const totalChars = text.length;
    if (cjkChars / totalChars > 0.3) {
        // Mostly CJK: ~1.5 chars per token
        return Math.ceil(totalChars / 1.5);
    }
    // Mostly Latin: ~4 chars per token
    return Math.ceil(totalChars / 4);
}

// Format currency
function formatPrice(price) {
    if (price < 0.01) return '$' + price.toFixed(4);
    if (price < 1) return '$' + price.toFixed(2);
    return '$' + price.toFixed(2);
}

// Format large numbers
function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}
