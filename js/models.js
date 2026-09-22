// AI model data (pricing as of late 2025, approximate)
const AI_MODELS = [
    { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI', inputPrice: 2.50, outputPrice: 10.00, contextWindow: 128000, currency: 'USD per 1M tokens' },
    { id: 'gpt-4o-mini', name: 'GPT-4o mini', provider: 'OpenAI', inputPrice: 0.15, outputPrice: 0.60, contextWindow: 128000, currency: 'USD per 1M tokens' },
    { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', provider: 'OpenAI', inputPrice: 10.00, outputPrice: 30.00, contextWindow: 128000, currency: 'USD per 1M tokens' },
    { id: 'claude-3-5-sonnet', name: 'Claude 3.5 Sonnet', provider: 'Anthropic', inputPrice: 3.00, outputPrice: 15.00, contextWindow: 200000, currency: 'USD per 1M tokens' },
    { id: 'claude-3-5-haiku', name: 'Claude 3.5 Haiku', provider: 'Anthropic', inputPrice: 0.25, outputPrice: 1.25, contextWindow: 200000, currency: 'USD per 1M tokens' },
    { id: 'claude-3-opus', name: 'Claude 3 Opus', provider: 'Anthropic', inputPrice: 15.00, outputPrice: 75.00, contextWindow: 200000, currency: 'USD per 1M tokens' },
    { id: 'gemini-1-5-pro', name: 'Gemini 1.5 Pro', provider: 'Google', inputPrice: 1.25, outputPrice: 5.00, contextWindow: 1000000, currency: 'USD per 1M tokens' },
    { id: 'gemini-1-5-flash', name: 'Gemini 1.5 Flash', provider: 'Google', inputPrice: 0.075, outputPrice: 0.30, contextWindow: 1000000, currency: 'USD per 1M tokens' },
    { id: 'llama-3-1-70b', name: 'Llama 3.1 70B', provider: 'Meta/Together', inputPrice: 0.88, outputPrice: 0.88, contextWindow: 128000, currency: 'USD per 1M tokens' },
    { id: 'mistral-large', name: 'Mistral Large', provider: 'Mistral', inputPrice: 2.00, outputPrice: 6.00, contextWindow: 32000, currency: 'USD per 1M tokens' },
    { id: 'deepseek-v2', name: 'DeepSeek V2', provider: 'DeepSeek', inputPrice: 0.14, outputPrice: 0.28, contextWindow: 128000, currency: 'USD per 1M tokens' },
    { id: 'glm-4', name: 'GLM-4', provider: 'Zhipu AI', inputPrice: 0.50, outputPrice: 0.50, contextWindow: 128000, currency: 'USD per 1M tokens' },
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AI_MODELS };
}
