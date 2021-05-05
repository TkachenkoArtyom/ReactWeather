export const simpleCore = (temp) => {
    if (temp < -10) {
        return 'Очень холодно';
    }
    if (temp < 5 && temp >= -10) {
        return 'Холодно';
    }
    if (temp >= 5 && temp < 15) {
        return 'Прохладно';
    }
    if (temp >= 15 && temp < 25) {
        return 'Тепло';
    }
    if (temp >= 25) {
        return 'Жарко';
    }
};