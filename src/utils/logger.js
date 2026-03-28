import log from 'loglevel';

const originalFactory = log.methodFactory;
log.methodFactory = function (methodName, logLevel, loggerName) {
    const rawMethod = originalFactory(methodName, logLevel, loggerName);
    return function (message, ...args) {
        const timestamp = new Date().toISOString();
        rawMethod(`[${timestamp}] ${methodName.toUpperCase()} [${loggerName || 'App'}]: ${message}`, ...args);
    };
};

const currentLevel = import.meta.env.VITE_LOG_LEVEL || 'info';

try {
    log.setLevel(currentLevel);
    // Додамо один лог для перевірки при завантаженні
    log.info(`Система логування ініціалізована. Поточний рівень: ${currentLevel}`);
} catch {
    log.setLevel('info');
}

export default log;