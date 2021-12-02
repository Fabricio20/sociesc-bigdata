export function guid() {
    return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, () => {
        const r = Math.floor(Math.random() * 16);
        return r.toString(16);
    });
}

export function movingAvg(array, countBefore, countAfter) {
    if (countAfter === undefined) countAfter = 0;
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const subArr = array.slice(Math.max(i - countBefore, 0), Math.min(i + countAfter + 1, array.length));
        const avg = subArr.reduce((a, b) => a + (isNaN(b) ? 0 : b), 0) / subArr.length;
        result.push(avg);
    }
    return result;
}

export const plugins = {
    zoom: {
        zoom: {
            wheel: {
                enabled: true,
            },
            pinch: {
                enabled: true
            },
            mode: 'x',
        }
    }
}

export let scalesNoTicks = {
    x: {
        ticks: {
            display: false
        }
    }
};

export const scales = {
    xAxes: {
        ticks: {
            autoSkip: true
        }
    },
    y: {
        beginAtZero: false
    }
}
